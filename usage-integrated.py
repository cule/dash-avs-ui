import os

import dash_avs_ui
import dash
from dash.dependencies import Input, Output
import dash_bootstrap_components as dbc
import dash_html_components as html

TEXT_COLOR = "white"
BG_COLOR = "black"

mapbox_token = os.getenv("MAPBOX_ACCESS_TOKEN")

app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

STYLES = [
    'light',
    'dark',
    'satellite',
]

TRIPS = {
    'kitti': 'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/',
    'nuScenes': 'https://raw.githubusercontent.com/uber/xviz-data/master/nutonomy/scene-0006/'
}

MODES = [
    'basic',
    'advanced'
]


controls = [
    dbc.FormGroup([
        dbc.Label('Map Style'),
        dbc.Select(
            id='select-style',
            options=[{'label': s.capitalize(), 'value': s} for s in STYLES],
            value=STYLES[0]
        )
    ]),
    dbc.FormGroup([
        dbc.Label('Dataset'),
        dbc.RadioItems(
            id='select-trip',
            options=[{'label': k, 'value': v} for k, v in TRIPS.items()],
            value=list(TRIPS.values())[1]
        )
    ]),
    dbc.FormGroup([
        dbc.Label('Mode'),
        dbc.Checklist(
            id='select-mode',
            options=[{'label': 'advanced', 'value': 'advanced'}],
            value=[],
            switch=True
        )
    ])

]

app.layout = dbc.Container([
    html.H1("Custom Map"),
    html.Hr(),
    dbc.Row([
        dbc.Col(dbc.Card(controls, body=True), md=3),
        dbc.Col(id='div-ui', md=9),
    ]),
    html.Div(id="temp")
], fluid=True)


@app.callback(
    Output('div-ui', 'children'),
    [Input('select-trip', 'value'), Input('select-style', 'value'), Input('select-mode', 'value')]
)
def update_log(trip, style, mode):
    map_style = f"mapbox://styles/mapbox/{style}-v9"
    log = {
        'timingsFilePath': trip + "0-frame.json",
        'getFilePath': trip + "${index}-frame.glb",
        'worker': True,
        'maxConcurrency': 4
    }

    if 'advanced' in mode:
        UI = dash_avs_ui.AdvancedUI
    else:
        UI = dash_avs_ui.BasicUI


    return UI(id={'name': 'avs-ui'}, log=log, mapStyle=map_style, containerStyle={'height': 'calc(100vh - 100px)', 'width': '73%'})


if __name__ == '__main__':
    app.run_server(debug=True)
