import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { Col, Row } from 'react-styled-flexboxgrid'

import MuiTheme from 'styles/Theme'
import GeneratorTemplate from '../templates/GeneratorTemplate'
import ThemePreview from '../organisms/ThemePreview'
import ThemeSetup from '../organisms/ThemeSetup'
import ThemePicker from '../organisms/ThemePicker'


const themes = {
  White: getMuiTheme(lightBaseTheme),
  Black: getMuiTheme(darkBaseTheme),
}

const presets = [
  { color: 'White', name: 'Light preset' },
  { color: 'Black', name: 'Dark preset' },
]

console.log(themes)

class MuiGeneratorPage extends Component {
  state = { muiTheme: themes.White }

  selectTheme = name =>
    event =>
      this.setState({ muiTheme: themes[name] })

  render() {
    return (
      <GeneratorTemplate picker={<ThemeSetup presets={presets} onChangePreset={this.selectTheme} />}>
        <MuiThemeProvider muiTheme={this.state.muiTheme}>
          <ThemePreview muiTheme={this.state.muiTheme} />
        </MuiThemeProvider>
      </GeneratorTemplate>
    )
  }
}

export default MuiGeneratorPage
