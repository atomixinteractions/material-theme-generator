'use strict';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Theme = getMuiTheme({
  palette: {
    primary1Color: "#111111",
    primary2Color: "#111111",
    pickerHeaderColor: "#111111",
    alternateTextColor: "#d9c77e",
    accent3Color: "#d9c77e",
    accent1Color: "#111111",
  },
  tabs: {
    textColor: "#000000",
    backgroundColor: "transparent",
  },
  raisedButton: {
    color: "#fff",
  },
  toggle: {
    thumbOnColor: "#d5c581",
    thumbOffColor: "#fff",
  },
  checkbox: {
    checkedColor: "#d9c77e",

  },
});

export default Theme;
