// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* global document, console */
/* eslint-disable no-console, no-unused-vars, no-undef */
import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import {setXVIZConfig, getXVIZConfig} from '@xviz/parser';
import {
  LogViewer,
  PlaybackControl,
  StreamSettingsPanel,
  MeterWidget,
  TrafficLightWidget,
  TurnSignalWidget,
  XVIZPanel,
  VIEW_MODE,
  XVIZFileLoader
} from 'streetscape.gl';
import {Form} from '@streetscape.gl/monochrome';
import sanitizeEvents from '../sanitizeEvents';

import {XVIZ_CONFIG, APP_SETTINGS, MAPBOX_TOKEN, MAP_STYLE, XVIZ_STYLE, CAR} from '../advanced/constants';


setXVIZConfig(XVIZ_CONFIG);

const TIMEFORMAT_SCALE = getXVIZConfig().TIMESTAMP_FORMAT === 'seconds' ? 1000 : 1;


/**
 * More advanced streetscape UI.
 */
export default class AdvancedUI extends React.Component {
  state = {
    settings: {
      viewMode: 'PERSPECTIVE',
      showTooltip: false
    }
  };

  // componentWillMount(){
  //   console.log("will mount");
  //   const {log} = this.props;
  
  //   if (typeof log.getFilePath === "string"){
  //     log.filePathTemplate = log.getFilePath;
  //     log.getFilePath = index => log.filePathTemplate.replace("${index}", index + 1);
  //   }
  
  //   const loader = new XVIZFileLoader(log);
  //   this.setState({log: loader});
  // }

  // componentDidMount() {
  //   this.state.log.on('error', console.error).connect();
  // }

  _onSettingsChange = changedSettings => {
    this.setState({
      settings: {...this.state.settings, ...changedSettings}
    });
    console.log("Settings changed:", this.state.settings);
  };

  render() {
    const {settings} = this.state;
    const {
      mapboxAccessToken, 
      mapStyle, 
      containerStyle, 
      controlPanelStyle, 
      logPanelStyle, 
      mapViewStyle, 
      hudStyle, 
      timelineStyle,
      playbackControlStyle,
      xvizStyles,
      log
    } = this.props;
  
    log.filePathTemplate = log.getFilePath;
    log.getFilePath = index => log.filePathTemplate.replace("${index}", index + 1);
    const loader = new XVIZFileLoader(log);
    loader.on('error', console.error).connect();


    return (
      <div style={containerStyle} id="container">
        <div style={controlPanelStyle} id="control-panel">
          <XVIZPanel log={loader} name="Metrics" />
          <hr />
          <XVIZPanel log={loader} name="Camera" />
          <hr />
          <Form
            data={APP_SETTINGS}
            values={this.state.settings}
            onChange={this._onSettingsChange}
          />
          <StreamSettingsPanel log={loader} />
        </div>
        <div style={logPanelStyle} id="log-panel">
          <div style={mapViewStyle} id="map-view">
            <LogViewer
              log={loader}
              mapboxApiAccessToken={mapboxAccessToken}
              mapStyle={mapStyle}
              car={CAR}
              xvizStyles={xvizStyles}
              showTooltip={settings.showTooltip}
              viewMode={VIEW_MODE[settings.viewMode]}
              // onSelectObject={(info, event) => this.props.setProps(sanitizeEvents({selectedInfo: info}))}
            />
            <div style={hudStyle} id="hud">
              <TurnSignalWidget log={loader} streamName="/vehicle/turn_signal" />
              <hr />
              <TrafficLightWidget log={loader} streamName="/vehicle/traffic_light" />
              <hr />
              <MeterWidget
                log={loader}
                streamName="/vehicle/acceleration"
                label="Acceleration"
                min={-4}
                max={4}
              />
              <hr />
              <MeterWidget
                log={loader}
                streamName="/vehicle/velocity"
                label="Speed"
                getWarning={x => (x > 6 ? 'FAST' : '')}
                min={0}
                max={20}
              />
            </div>
          </div>
          <div style={timelineStyle} id="timeline">
            <PlaybackControl
              width="100%"
              log={loader}
              style={playbackControlStyle}
              formatTimestamp={x => new Date(x * TIMEFORMAT_SCALE).toUTCString()}
            />
          </div>
        </div>
      </div>
    );
  }
}

AdvancedUI.defaultProps = {
  log: {
    timingsFilePath:
    'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
    getFilePath: "https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index}-frame.glb",
    worker: true,
    maxConcurrency: 4
  },
  mapStyle: 'mapbox://styles/mapbox/light-v9',
  xvizStyles: {
    '/tracklets/objects': [{name: 'selected', style: {fill_color: '#ff8000aa'}}],
    '/lidar/points': [{style: {point_color_mode: 'ELEVATION'}}]
  }  
};

AdvancedUI.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * A string representing the logs
     */
    log: PropTypes.object,

    /**
     * Mapbox API token
     */
    mapboxAccessToken: PropTypes.string,

    /**
     * Map style
     */
    mapStyle: PropTypes.string,

    /**
     * xviz styles
     */
    xvizStyles: PropTypes.object,

    // /**
    //  * Read only prop
    //  */
    // selectedInfo: PropTypes.object,
    
    /**
     * Styling
     */
    containerStyle: PropTypes.object,

    /**
     * Styling
     */
    controlPanelStyle: PropTypes.object,

    /**
     * Styling
     */
    logPanelStyle: PropTypes.object,

    /**
     * Styling
     */
    mapViewStyle: PropTypes.object,


    /**
     * Styling
     */
    hudStyle: PropTypes.object,


    /**
     * Styling
     */
    timelineStyle: PropTypes.object,

    /**
     * component style
     */
    playbackControlStyle: PropTypes.object

}