# AUTO GENERATED FILE - DO NOT EDIT

export lightui

"""
    lightui(;kwargs...)

A LightUI component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `log` (Dict; optional): A string representing the logs
- `mapboxAccessToken` (Dict; optional): Mapbox API token
"""
function lightui(; kwargs...)
        available_props = Symbol[:id, :log, :mapboxAccessToken]
        wild_props = Symbol[]
        return Component("lightui", "LightUI", "dash_avs_ui", available_props, wild_props; kwargs...)
end

