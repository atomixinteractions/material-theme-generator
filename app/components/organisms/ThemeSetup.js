import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Column from '../atoms/Column'
import Row from '../atoms/Row'
import Color from '../atoms/Color'
import ThemePicker from '../organisms/ThemePicker'


const ThemeSetup = ({ theme }) => (
  <Column grow={1} marginBetween="L" padding="L" style={{ position: 'relative' }}>
    <Row justifyContent="center" grow={1}>
      {theme.base == 'light' && <Color color="White">Light theme</Color>}
      {theme.base == 'dark' && <Color color="Black">Dark theme</Color>}
    </Row>
    <Row justifyContent="center" grow={2} marginBetween="L">
      <Color color="Red" />
      <Color color="Light Blue" />
    </Row>
    <Row justifyContent="flex-end" grow={5} marginBetween="M">
      Advanced setup
    </Row>
  </Column>
)


export default ThemeSetup
