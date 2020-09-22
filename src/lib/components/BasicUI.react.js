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
  VIEW_MODE
} from 'streetscape.gl';
import {Form} from '@streetscape.gl/monochrome';
import {XVIZFileLoader} from 'streetscape.gl';


import {XVIZ_CONFIG, APP_SETTINGS, MAPBOX_TOKEN, MAP_STYLE, XVIZ_STYLE, CAR} from '../advanced/constants';

setXVIZConfig(XVIZ_CONFIG);

const TIMEFORMAT_SCALE = getXVIZConfig().TIMESTAMP_FORMAT === 'seconds' ? 1000 : 1;

// // __IS_STREAMING__ and __IS_LIVE__ are defined in webpack.config.js
// const exampleLog = require(__IS_STREAMING__
//   ? './log-from-stream'
//   : __IS_LIVE__
//     ? './log-from-live'
//     : './log-from-file').default;

const exampleLog = require('../advanced/log-from-file').default;

/**
 * Simple streetscape UI.
 */
export default class BasicUI extends PureComponent {
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
      logPanelStyle, 
      mapViewStyle,
      timelineStyle,
      log
    } = this.props;

    log.filePathTemplate = log.getFilePath;
    log.getFilePath = index => log.filePathTemplate.replace("${index}", index + 1);
    const loader = new XVIZFileLoader(log);
    loader.on('error', console.error).connect();

    return (
      <div id="container" style={containerStyle}>
        <div id="log-panel" style={logPanelStyle}>
          <div id="map-view" style={mapViewStyle}>
            <LogViewer
              log={loader}
              mapboxApiAccessToken={mapboxAccessToken}
              mapStyle={mapStyle}
              car={CAR}
              xvizStyles={XVIZ_STYLE}
              showTooltip={settings.showTooltip}
              viewMode={VIEW_MODE[settings.viewMode]}
            />
          </div>
          <div id="timeline" style={timelineStyle}>
            <PlaybackControl
              width="100%"
              log={loader}
              formatTimestamp={x => new Date(x * TIMEFORMAT_SCALE).toUTCString()}
            />
          </div>
        </div>
      </div>
    );
  }
}

BasicUI.defaultProps = {
  log: {
    timingsFilePath:
      'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
    getFilePath: index =>
      `https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index +
        1}-frame.glb`,
    worker: true,
    maxConcurrency: 4
  }
};

BasicUI.propTypes = {
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
     * Temp
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
     * Styling
     */
    containerStyle: PropTypes.object,

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
    timelineStyle: PropTypes.object,
}