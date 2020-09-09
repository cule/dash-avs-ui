# AUTO GENERATED FILE - DO NOT EDIT

export basicui

"""
    basicui(;kwargs...)

A BasicUI component.

Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `setProps` (optional): Dash-assigned callback that should be called to report property changes
to Dash, to make them available for callbacks.
"""
function basicui(; kwargs...)
        available_props = Symbol[:id]
        wild_props = Symbol[]
        return Component("basicui", "BasicUI", "dash_avs_ui", available_props, wild_props; kwargs...)
end

