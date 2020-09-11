# AUTO GENERATED FILE - DO NOT EDIT

export basicui

"""
    basicui(;kwargs...)

A BasicUI component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `log` (Dict; optional): A string representing the logs
"""
function basicui(; kwargs...)
        available_props = Symbol[:id, :log]
        wild_props = Symbol[]
        return Component("basicui", "BasicUI", "dash_avs_ui", available_props, wild_props; kwargs...)
end

