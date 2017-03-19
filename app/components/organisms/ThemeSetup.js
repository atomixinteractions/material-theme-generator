import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Column from '../atoms/Column'
import Row from '../atoms/Row'
import Color from '../atoms/Color'
import ColorBox from '../molecules/ColorBox'
import ThemePicker from '../organisms/ThemePicker'


const ThemeSetup_ = ({ presets = [], onChangePreset }) => (
  <Column grow={1} marginBetween="L" padding="L" style={{ position: 'relative' }}>
    <Row justifyContent="center" grow={1} marginBetween="L">
      {presets.map(preset =>
        <Color key={preset.color} color={preset.color} onClick={onChangePreset(preset.color)}>{preset.name}</Color>
      )}
    </Row>
    <Row justifyContent="center" grow={2} marginBetween="L">
      <Color color="Red" />
      <Color color="Light Blue" />
    </Row>
    <Row justifyContent="flex-end" grow={5} marginBetween="M">
      Advanced settings
    </Row>
  </Column>
)

const ThemeSetup = ({ onChangePreset }) => (
  <Column grow={1} marginBetween="L" padding="L">
    <Row marginBetween="L">
      <ColorBox title="Primary">
        <Color color="Green" />
      </ColorBox>
      <ColorBox title="Accent">
        <Color color="Pink" hue={900} />
      </ColorBox>
    </Row>
    <Row marginBetween="L">
      <ColorBox title="Background" grow={2}>
        <Color color="White" />
      </ColorBox>
    </Row>
  </Column>
)


export default ThemeSetup
