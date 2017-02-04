import React, { PropTypes } from 'react'
import styled from 'styled-components'
import material from 'google-material-color'

import Column from '../atoms/Column'
import Row from '../atoms/Row'
import Color from '../atoms/Color'


const PickerWrapper = styled(Column)`
  flex-grow: 1;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
`

const RowWrapper = styled(Row)`
  flex-grow: 1;
`


const ThemePicker = (props) => (
  <PickerWrapper>
    <RowWrapper>
      <Color />
      <Color color="Red" />
      <Color color="Pink" />
      <Color color="Purple" />
      <Color color="Deep Purple" />
    </RowWrapper>
    <RowWrapper>
      <Color color="Indigo" />
      <Color color="Blue" />
      <Color color="Light Blue" />
      <Color color="Cyan" />
      <Color color="Teal" />
    </RowWrapper>
    <RowWrapper>
      <Color color="Green" />
      <Color color="Light Green" />
      <Color color="Lime" />
      <Color color="Yellow" />
      <Color color="Amber" />
    </RowWrapper>
    <RowWrapper>
      <Color color="Orange" />
      <Color color="Deep Orange" />
      <Color color="Brown" />
      <Color color="Grey" />
      <Color color="Blue Grey" />
    </RowWrapper>
  </PickerWrapper>
)

ThemePicker.propTypes = {
}

export default ThemePicker
