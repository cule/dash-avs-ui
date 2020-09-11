# AUTO GENERATED FILE - DO NOT EDIT

veryBasicUI <- function(id=NULL, log=NULL) {
    
    props <- list(id=id, log=log)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VeryBasicUI',
        namespace = 'dash_avs_ui',
        propNames = c('id', 'log'),
        package = 'dashAvsUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
