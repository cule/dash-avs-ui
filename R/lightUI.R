# AUTO GENERATED FILE - DO NOT EDIT

lightUI <- function(id=NULL, log=NULL, mapboxAccessToken=NULL) {
    
    props <- list(id=id, log=log, mapboxAccessToken=mapboxAccessToken)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LightUI',
        namespace = 'dash_avs_ui',
        propNames = c('id', 'log', 'mapboxAccessToken'),
        package = 'dashAvsUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
