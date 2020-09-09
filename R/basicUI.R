# AUTO GENERATED FILE - DO NOT EDIT

basicUI <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'BasicUI',
        namespace = 'dash_avs_ui',
        propNames = c('id'),
        package = 'dashAvsUi'
        )

    structure(component, class = c('dash_component', 'list'))
}
