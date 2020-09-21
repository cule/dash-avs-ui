import dash_avs_ui
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div(
    dash_avs_ui.BasicUI(
        id='avs-ui',
        log={
            'timingsFilePath': 'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
            'getFilePath': "https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index}-frame.glb",
            'worker': True,
            'maxConcurrency': 4
        },
        containerStyle={'width': '50%', 'height': '75vh'}
    ),
    className='light',
)

if __name__ == '__main__':
    app.run_server(debug=True)
