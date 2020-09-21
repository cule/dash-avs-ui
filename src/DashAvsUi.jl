
module DashAvsUi
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("advancedui.jl")
include("basicui.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_avs_ui",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_avs_ui.min.js",
    external_url = "https://unpkg.com/dash_avs_ui@0.0.1/dash_avs_ui/dash_avs_ui.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_avs_ui.min.js.map",
    external_url = "https://unpkg.com/dash_avs_ui@0.0.1/dash_avs_ui/dash_avs_ui.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
