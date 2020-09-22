# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AdvancedUI(Component):
    """An AdvancedUI component.
More advanced streetscape UI.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- log (dict; default {
  timingsFilePath:
  'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
  getFilePath: "https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index}-frame.glb",
  worker: true,
  maxConcurrency: 4
}): A string representing the logs
- mapboxAccessToken (string; optional): Mapbox API token
- mapStyle (string; default 'mapbox://styles/mapbox/light-v9'): Map style
- xvizStyles (dict; default {
  '/tracklets/objects': [{name: 'selected', style: {fill_color: '#ff8000aa'}}],
  '/lidar/points': [{style: {point_color_mode: 'ELEVATION'}}]
}): xviz styles
- selectedInfo (dict; optional): Read only prop
- containerStyle (dict; optional): Styling
- controlPanelStyle (dict; optional): Styling
- logPanelStyle (dict; optional): Styling
- mapViewStyle (dict; optional): Styling
- hudStyle (dict; optional): Styling
- timelineStyle (dict; optional): Styling
- playbackControlStyle (dict; optional): component style"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, log=Component.UNDEFINED, mapboxAccessToken=Component.UNDEFINED, mapStyle=Component.UNDEFINED, xvizStyles=Component.UNDEFINED, selectedInfo=Component.UNDEFINED, containerStyle=Component.UNDEFINED, controlPanelStyle=Component.UNDEFINED, logPanelStyle=Component.UNDEFINED, mapViewStyle=Component.UNDEFINED, hudStyle=Component.UNDEFINED, timelineStyle=Component.UNDEFINED, playbackControlStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'log', 'mapboxAccessToken', 'mapStyle', 'xvizStyles', 'selectedInfo', 'containerStyle', 'controlPanelStyle', 'logPanelStyle', 'mapViewStyle', 'hudStyle', 'timelineStyle', 'playbackControlStyle']
        self._type = 'AdvancedUI'
        self._namespace = 'dash_avs_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'log', 'mapboxAccessToken', 'mapStyle', 'xvizStyles', 'selectedInfo', 'containerStyle', 'controlPanelStyle', 'logPanelStyle', 'mapViewStyle', 'hudStyle', 'timelineStyle', 'playbackControlStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AdvancedUI, self).__init__(**args)
