# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AdvancedUI(Component):
    """An AdvancedUI component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- log (dict; default {
  timingsFilePath:
  'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
  getFilePath: "https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index}-frame.glb",
  worker: true,
  maxConcurrency: 4
}): A string representing the logs
- mapboxAccessToken (dict; optional): Mapbox API token"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, log=Component.UNDEFINED, mapboxAccessToken=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'log', 'mapboxAccessToken']
        self._type = 'AdvancedUI'
        self._namespace = 'dash_avs_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'log', 'mapboxAccessToken']
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
