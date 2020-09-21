# AUTO GENERATED FILE - DO NOT EDIT

basicUI <- function(id=NULL, log=NULL, mapboxAccessToken=NULL, mapStyle=NULL, containerStyle=NULL, logPanelStyle=NULL, mapViewStyle=NULL, timelineStyle=NULL) {
    
    props <- list(id=id, log=log, mapboxAccessToken=mapboxAccessToken, mapStyle=mapStyle, containerStyle=containerStyle, logPanelStyle=logPanelStyle, mapViewStyle=mapViewStyle, timelineStyle=timelineStyle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'BasicUI',
        namespace = 'dash_avs_ui',
        propNames = c('id', 'log', 'mapboxAccessToken', 'mapStyle', 'containerStyle', 'logPanelStyle', 'mapViewStyle', 'timelineStyle'),
        package = 'dashAvsUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
