# AUTO GENERATED FILE - DO NOT EDIT

advancedUI <- function(id=NULL, log=NULL, mapboxAccessToken=NULL, mapStyle=NULL, xvizStyles=NULL, selectedInfo=NULL, containerStyle=NULL, controlPanelStyle=NULL, logPanelStyle=NULL, mapViewStyle=NULL, hudStyle=NULL, timelineStyle=NULL, playbackControlStyle=NULL) {
    
    props <- list(id=id, log=log, mapboxAccessToken=mapboxAccessToken, mapStyle=mapStyle, xvizStyles=xvizStyles, selectedInfo=selectedInfo, containerStyle=containerStyle, controlPanelStyle=controlPanelStyle, logPanelStyle=logPanelStyle, mapViewStyle=mapViewStyle, hudStyle=hudStyle, timelineStyle=timelineStyle, playbackControlStyle=playbackControlStyle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AdvancedUI',
        namespace = 'dash_avs_ui',
        propNames = c('id', 'log', 'mapboxAccessToken', 'mapStyle', 'xvizStyles', 'selectedInfo', 'containerStyle', 'controlPanelStyle', 'logPanelStyle', 'mapViewStyle', 'hudStyle', 'timelineStyle', 'playbackControlStyle'),
        package = 'dashAvsUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
