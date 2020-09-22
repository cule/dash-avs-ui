# AUTO GENERATED FILE - DO NOT EDIT

export advancedui

"""
    advancedui(;kwargs...)

An AdvancedUI component.
More advanced streetscape UI.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `log` (Dict; optional): A string representing the logs
- `mapboxAccessToken` (String; optional): Mapbox API token
- `mapStyle` (String; optional): Map style
- `xvizStyles` (Dict; optional): xviz styles
- `selectedInfo` (Dict; optional): Read only prop
- `containerStyle` (Dict; optional): Styling
- `controlPanelStyle` (Dict; optional): Styling
- `logPanelStyle` (Dict; optional): Styling
- `mapViewStyle` (Dict; optional): Styling
- `hudStyle` (Dict; optional): Styling
- `timelineStyle` (Dict; optional): Styling
- `playbackControlStyle` (Dict; optional): component style
"""
function advancedui(; kwargs...)
        available_props = Symbol[:id, :log, :mapboxAccessToken, :mapStyle, :xvizStyles, :selectedInfo, :containerStyle, :controlPanelStyle, :logPanelStyle, :mapViewStyle, :hudStyle, :timelineStyle, :playbackControlStyle]
        wild_props = Symbol[]
        return Component("advancedui", "AdvancedUI", "dash_avs_ui", available_props, wild_props; kwargs...)
end

