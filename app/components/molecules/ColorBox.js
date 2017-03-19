import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Column from '../atoms/Column'
import Row from '../atoms/Row'


const ColorTitle = styled.div`
  color: white;
  font-size: 1.4rem;
  line-height: 1.4rem;
`
ColorTitle.displayName = 'ColorTitle'



const ColorBox = ({ title, children }) => (
  <Column marginBetween="M" grow={1}>
    {title && <ColorTitle>{title}</ColorTitle>}
    {children}
  </Column>
)

ColorBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ColorBox
