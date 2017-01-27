import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { Tabs, Tab } from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class AllComponentsViewPage extends Component {
  render () {
    return (
      <div>
        <TextField
          floatingLabelText="Floating Label Text"
          value="TextField without error"
        />
        <TextField
          floatingLabelText="TextField wit error and empty value"
          hintText="Hing text"
          errorText="Error text"
        />

        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab label="onActive" data-route="/home">
            <div>
              <h2>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
