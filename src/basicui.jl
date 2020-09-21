# AUTO GENERATED FILE - DO NOT EDIT

export basicui

"""
    basicui(;kwargs...)

A BasicUI component.
Simple streetscape UI.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `log` (Dict; optional): Temp
- `mapboxAccessToken` (String; optional): Mapbox API token
- `mapStyle` (String; optional): Map style
- `containerStyle` (Dict; optional): Styling
- `logPanelStyle` (Dict; optional): Styling
- `mapViewStyle` (Dict; optional): Styling
- `timelineStyle` (Dict; optional): Styling
"""
function basicui(; kwargs...)
        available_props = Symbol[:id, :log, :mapboxAccessToken, :mapStyle, :containerStyle, :logPanelStyle, :mapViewStyle, :timelineStyle]
        wild_props = Symbol[]
        return Component("basicui", "BasicUI", "dash_avs_ui", available_props, wild_props; kwargs...)
end

