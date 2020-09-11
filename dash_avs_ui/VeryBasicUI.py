# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VeryBasicUI(Component):
    """A VeryBasicUI component.


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
}): Temp"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, log=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'log']
        self._type = 'VeryBasicUI'
        self._namespace = 'dash_avs_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'log']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VeryBasicUI, self).__init__(**args)
