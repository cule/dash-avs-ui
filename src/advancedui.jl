# AUTO GENERATED FILE - DO NOT EDIT

export advancedui

"""
    advancedui(;kwargs...)

An AdvancedUI component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `log` (Dict; optional): A string representing the logs
- `mapboxAccessToken` (Dict; optional): Mapbox API token
"""
function advancedui(; kwargs...)
        available_props = Symbol[:id, :log, :mapboxAccessToken]
        wild_props = Symbol[]
        return Component("advancedui", "AdvancedUI", "dash_avs_ui", available_props, wild_props; kwargs...)
end

