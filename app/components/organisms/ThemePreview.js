import React, { Component, PropTypes } from 'react';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import muiThemeable from 'material-ui/styles/muiThemeable';
import typography from 'material-ui/styles/typography';
import ClearFix from 'material-ui/internal/ClearFix';


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
} from 'material-ui';


class ThemesPage extends Component {
  static propTypes = {
    muiTheme: PropTypes.object,
    onChangeMuiTheme: PropTypes.func,
    width: PropTypes.number.isRequired,
  };

  state = {
    dialogOpen: false,
    snackbarOpen: false,
    drawerOpen: false,
  };

  componentWillMount() {
    this.setState({
      valueTabs: this.props.muiTheme.name || 'light',
    });
  }

  getStyles() {
    const {
      muiTheme,
      width,
    } = this.props;

    const canvasColor = muiTheme.baseTheme.palette.canvasColor;
    const borderColor = muiTheme.baseTheme.palette.borderColor;
    const styles = {
      group: {
        float: 'left',
        width: width === SMALL ? '100%' : '33%',
        marginTop: '16px',
        padding: '0 50px',
        boxSizing: 'border-box',
      },
      groupSlider: {
        marginTop: '0px',
        width: '100%',
      },
      container: {
        marginBottom: '16px',
        minHeight: '24px',
        textAlign: 'left',
      },
      containerCentered: {
        textAlign: 'center',
      },
      paper: {
        height: '100px',
        width: '100px',
        margin: '0 auto',
        marginBottom: '64px',
      },
      textfield: {
        width: '100%',
      },
      slider: {
        marginTop: '0px',
        marginBottom: '0px',
      },
      title: {
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: typography.fontWeightMedium,
        color: typography.textDarkBlack,
      },
      liveExamplePaper: {
        backgroundColor: canvasColor,
        marginBottom: 32,
        overflow: 'hidden',
        width: '50vw',
      },
      bottomBorderWrapper: {
        borderBottom: `1px solid ${borderColor}`,
        paddingBottom: '10px',
      },
    }

    styles.containerCentered = { ...styles.container, ...styles.containerCentered }
    styles.groupSlider = { ...styles.group, ...styles.groupSlider }

    return styles;
  }

  getComponentGroup() {
    const styles = this.getStyles()

    return (
      <ClearFix>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />
          </div>
          <div style={styles.containerCentered}>
            <RaisedButton label="Secondary" secondary={true} />
          </div>
          <div style={styles.containerCentered}>
            <RaisedButton label="Primary" primary={true} />
          </div>
          <div style={styles.containerCentered}>
            <RaisedButton label="Default" />
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.container}>
            <Checkbox
              name="checkboxName1"
              value="checkboxValue1"
              label="checkbox"
            />
            <Checkbox
              name="checkboxName2"
              value="checkboxValue2"
              label="disabled checkbox"
              disabled={true}
            />
          </div>
          <div style={styles.container}>
            <RadioButtonGroup
              name="shipSpeed"
              defaultSelected="usd"
            >
              <RadioButton
                value="usd"
                label="USD"
              />
              <RadioButton
                value="euro"
                label="Euro"
              />
              <RadioButton
                value="mxn"
                label="MXN"
                disabled={true}
              />
            </RadioButtonGroup>
          </div>
          <div style={styles.container}>
            <Toggle
              name="toggleName1"
              label="toggle"
            />
            <Toggle
              name="toggleName2"
              label="disabled toggle"
              defaultToggled={true}
              disabled={true}
            />
          </div>
        </div>
        <div style={Object.assign({}, styles.group, {marginTop: 0})}>
          <div style={styles.container}>
            <TextField
              style={styles.textfield}
              hintText="TextField"
            />
          </div>
          <div style={styles.container}>
            <DatePicker
              hintText="Landscape Dialog"
              mode="landscape"
              style={{ width: '100%' }}
              textFieldStyle={{ width: '100%' }}
            />
          </div>
          <div style={{ ...styles.container, width: '100%' }}>
            <DropDownMenu
              value={3}
              style={{ width: '100%' }}
              labelStyle={{ paddingLeft: 0, paddingRight: 0 }}
              underlineStyle={{ margin: '-1px 0' }}
              iconStyle={{ paddingLeft: 0, right: -16 }}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>
          </div>
        </div>
        <div style={styles.groupSlider}>
          <Slider style={styles.slider} name="slider2" defaultValue={0.5} />
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton label="View Dialog" onTouchTap={this.handleTouchTapDialog} />
            <Dialog
              open={this.state.dialogOpen}
              title="Dialog With Standard Actions"
              actions={[
                <FlatButton
                  label="Cancel"
                  keyboardFocused={true}
                  onTouchTap={this.handleRequestCloseDialog}
                  primary={true}
                />,
                <FlatButton
                  label="Submit"
                  onTouchTap={this.handleRequestCloseDialog}
                  primary={true}
                />,
              ]}
              onRequestClose={this.handleRequestCloseDialog}
            >
              The actions in this window are created from tan array of element's that&#39;s passed in.
            </Dialog>
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton
              onTouchTap={this.handleTouchTapDrawer}
              label="View Drawer"
            />
            <Drawer
              open={this.state.drawerOpen} docked={false}
              onRequestChange={this.handleRequestChangeDrawer}
            >
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton
              onTouchTap={this.handleTouchTapSnackbar}
              label="View Snackbar"
            />
          </div>
          <Snackbar
            open={this.state.snackbarOpen}
            onRequestClose={this.handleRequestCloseSnackbar}
            message="This is a snackbar"
            action="Got It!"
            onActionTouchTap={this.handleRequestCloseSnackbar}
          />
        </div>
      </ClearFix>
    );
  }

  handleTouchTapDrawer = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  handleRequestChangeDrawer = (open) => {
    this.setState({
      drawerOpen: open,
    });
  };

  handleTouchTapDialog = () => {
    this.setState({
      dialogOpen: true,
    });
  };

  handleRequestCloseDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleTouchTapSnackbar = () => {
    this.setState({
      snackbarOpen: true,
    });
  };

  handleRequestCloseSnackbar = () => {
    this.setState({
      snackbarOpen: false,
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <Paper style={styles.liveExamplePaper}>
        <ClearFix style={styles.liveExampleBlock}>
          {this.getComponentGroup()}
        </ClearFix>
      </Paper>
    );
  }
}

export default muiThemeable()(withWidth()(ThemesPage));
