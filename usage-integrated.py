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
    'street',
    'light',
    'dark',
    'satellite',
]

avs_component = dash_avs_ui.AdvancedUI(
    id='avs-ui',
    log={
        'timingsFilePath': 'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
        'getFilePath': "https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index}-frame.glb",
        'worker': True,
        'maxConcurrency': 4
    },
    mapStyle='mapbox://styles/mapbox/light-v9',
)

controls = [
    dbc.FormGroup([
        dbc.Label('Map Style'),
        dbc.Select(
            id='select-style',
            options=[{'label': s.capitalize(), 'value': s} for s in STYLES],
            value=STYLES[0]
        )
    ])

]

app.layout = dbc.Container([
    html.H1("Custom Map"),
    html.Hr(),
    dbc.Card(dbc.Row([dbc.Col(x) for x in controls]), body=True),
    dbc.Row(avs_component)
], fluid=True)

if __name__ == '__main__':
    app.run_server(debug=True)
