import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import GeneratorTemplate from '../templates/GeneratorTemplate'
import ThemeSetup from '../organisms/ThemeSetup'

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


const mapStateToProps = state => ({ theme: state.setup })

const enhance = compose(
  connect(mapStateToProps),
)

const blockStyle = { margin: '15px' }
const elementStyle = { margin: '10px' }

const PreviewMUIPage = ({ theme }) => (
  <GeneratorTemplate picker={<ThemeSetup theme={theme} />}>
    <MuiThemeProvider>
        <div>
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
  </GeneratorTemplate>
)


export default enhance(PreviewMUIPage)
