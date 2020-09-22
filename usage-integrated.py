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

avs_component = html.Div(id="div-ui")

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
        dbc.Select(
            id='select-trip',
            options=[{'label': k, 'value': v} for k, v in TRIPS.items()],
            value=list(TRIPS.values())[1]
        )
    ])

]

app.layout = dbc.Container([
    html.H1("Custom Map"),
    html.Hr(),
    dbc.Card(dbc.Row([dbc.Col(x) for x in controls]), body=True),
    dbc.Row(avs_component)
], fluid=True)


@app.callback(
    Output('div-ui', 'children'),
    [Input('select-trip', 'value'), Input('select-style', 'value')]
)
def update_log(trip, style):
    log = {
        'timingsFilePath': trip + "0-frame.json",
        'getFilePath': trip + "${index}-frame.glb",
        'worker': True,
        'maxConcurrency': 4
    }

    print(log['timingsFilePath'])

    return dash_avs_ui.AdvancedUI(
        log=log,
        mapStyle=f"mapbox://styles/mapbox/{style}-v9",
        containerStyle={'height': '70vh'}
    )



if __name__ == '__main__':
    app.run_server(debug=True)
