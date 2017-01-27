import React from 'react';
import TextField from 'material-ui/TextField'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class AllComponentsViewPage extends React.Component {
  render () {
    return (
      <div>
        <TextField
          floatingLabelText={'Floating Label Text'}
          value=""
          errorText={'Error text'}
        />
      </div>
    )
  }
}

export default AllComponentsViewPage
