# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BasicUI(Component):
    """A BasicUI component.
Simple streetscape UI.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- log (dict; default {
  timingsFilePath:
    'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
  getFilePath: index =>
    `https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index +
      1}-frame.glb`,
  worker: true,
  maxConcurrency: 4
}): Temp
- mapboxAccessToken (string; optional): Mapbox API token
- mapStyle (string; optional): Map style
- containerStyle (dict; optional): Styling
- logPanelStyle (dict; optional): Styling
- mapViewStyle (dict; optional): Styling
- timelineStyle (dict; optional): Styling"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, log=Component.UNDEFINED, mapboxAccessToken=Component.UNDEFINED, mapStyle=Component.UNDEFINED, containerStyle=Component.UNDEFINED, logPanelStyle=Component.UNDEFINED, mapViewStyle=Component.UNDEFINED, timelineStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'log', 'mapboxAccessToken', 'mapStyle', 'containerStyle', 'logPanelStyle', 'mapViewStyle', 'timelineStyle']
        self._type = 'BasicUI'
        self._namespace = 'dash_avs_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'log', 'mapboxAccessToken', 'mapStyle', 'containerStyle', 'logPanelStyle', 'mapViewStyle', 'timelineStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BasicUI, self).__init__(**args)
