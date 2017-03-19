import React, { PropTypes } from 'react'
import styled from 'styled-components'
import material from 'google-material-color'

import Color from '../atoms/Color'


const primaryList = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
const accentList = ['A100', 'A200', 'A400', 'A700']


const HueSelectorContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${material.get('Blue Grey', 600)};
  padding: .4rem;
  border-radius: 3px;
  position: absolute;
  top: 50px;
  min-width: 300px;
`
HueSelectorContainer.displayName = 'HueSelectorContainer'


const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: .4rem 1rem;
  color: white;
`
Title.displayName = 'Title'


const HueSelector = ({ colorName, primary = true, accent = false, hideTitle = false }) => (
  <HueSelectorContainer>
    {!hideTitle && <Title>{colorName}</Title>}
    {primary && primaryList.map(hue =>
      <Color key={colorName + hue} color={colorName} hue={hue} />
    )}
    {accent && accentList.map(hue =>
      <Color key={colorName + hue} color={colorName} hue={hue} />
    )}
  </HueSelectorContainer>
)

HueSelector.propTypes = {
  colorName: PropTypes.oneOf(Object.keys(material.palette)),
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  hideTitle: PropTypes.bool,
}

export default HueSelector
