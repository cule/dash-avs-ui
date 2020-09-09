import dash_avs_ui
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_avs_ui.BasicUI()
])

if __name__ == '__main__':
    app.run_server(debug=True)
