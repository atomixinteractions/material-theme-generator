import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Checkbox,
  DatePicker,
  Dialog,
  DropDownMenu,
  FlatButton,
  FloatingActionButton,
  Drawer,
  MenuItem,
  Paper,
  RadioButton,
  RadioButtonGroup,
  RaisedButton,
  Snackbar,
  Slider,
  Tabs,
  Tab,
  TextField,
  Toggle,
} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()


class AllComponentsViewPage extends Component {
  state = {
    theme: 'lightBaseTheme',
  }

  changeTheme = this.changeTheme.bind(this)
  getMainColorByThemeName = this.getMainColorByThemeName.bind(this)

  changeTheme(newThemeTitle) {
    this.setState({
      theme: newThemeTitle,
    }, () => this.props.changeTheme(newThemeTitle))
  }

  getMainColorByThemeName() {
    switch (this.state.theme) {
      case 'lightBaseTheme':
        return '#fff'
      case 'darkBaseTheme':
        return '#303030'
      default :
        return '#fff'
    }
  }

  render () {
    const blockStyle = { margin: '15px' }
    const elementStyle = { margin: '10px' }
        
    return (
      <MuiThemeProvider muiTheme={this.props.theme}>
        <div style={{ backgroundColor: this.getMainColorByThemeName()} }>
          <Tabs value={this.state.theme} onChange={this.changeTheme}>
            <Tab label="Light Base Theme" value="lightBaseTheme" />
            <Tab label="Dark Base Theme" value="darkBaseTheme" />
            <Tab label="Dark Base Theme" value="razzwanTheme" />
          </Tabs>

          <Paper style={blockStyle}>
            <Checkbox label="Test Checkbox" />
            <Checkbox disabled label="Test Checkbox" />
          </Paper>

          <Paper style={blockStyle} zDepth={1}>
            <DatePicker/>
          </Paper>

          <Paper style={blockStyle} zDepth={2}>
            <TextField style={elementStyle} floatingLabelText="TextField" />
            <TextField style={elementStyle} floatingLabelText="TextField" defaultValue="Default Value" />
            <TextField style={elementStyle} floatingLabelText="TextField" defaultValue="Default Value" errorText="Error!" />
            <DropDownMenu style={elementStyle}>
              <MenuItem primaryText="First" />
              <MenuItem primaryText="Second" />
              <MenuItem primaryText="Last" />
            </DropDownMenu>
          </Paper>

          <Paper style={blockStyle} zDepth={3}>
            <FlatButton style={elementStyle} label="I am a FlatButton" />
            <FlatButton style={elementStyle} primary label="I am a FlatButton" />
            <FlatButton style={elementStyle} secondary label="I am a FlatButton" />
          </Paper>

          <Paper style={blockStyle} zDepth={4}>
            <RaisedButton style={elementStyle} label="I am a RaisedButton" />
            <RaisedButton style={elementStyle} primary label="I am a RaisedButton" />
            <RaisedButton style={elementStyle} secondary label="I am a RaisedButton" />
          </Paper>

          <Paper style={blockStyle} zDepth={5}>
            <FloatingActionButton style={elementStyle} label="I am a RaisedButton" />
          </Paper>

          <Paper style={blockStyle}>
            <RadioButtonGroup style={elementStyle} name="ttt">
              <RadioButton label="Name" value={1} />
              <RadioButton label="Name2" value={2} />
              <RadioButton label="Name3" value={3} />
            </RadioButtonGroup>
          </Paper>

          <Paper style={blockStyle}>
            <Slider style={elementStyle} />
            <Toggle label="Toggle" />
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(
  state => ({
    theme: state.theme,
  }),
  dispatch => ({
    changeTheme: (newThemeTitle) => {
      dispatch({ type: 'REPLACE_CURRENT_THEME', theme: require(`../themes/${newThemeTitle}`).default })
    }
  })
)(AllComponentsViewPage)
