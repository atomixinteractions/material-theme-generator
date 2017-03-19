import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import material from 'google-material-color'


const ColorWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${props => material.get((props.color || 'Blue Grey'), props.hue || 500)};
  color: ${props => material.getText((props.color || 'Blue Grey'), props.hue || '500')};
  transition: all .3s;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 1rem;
  box-shadow: 0 0 0 rgba(0,0,0,0);

  &:hover {
    box-shadow: 0 3px 10px rgba(0,0,0,.23), 0 3px 10px rgba(0,0,0,.16);
    transform: scale(1.025);
  }

  ${props => props.active && css`
    box-shadow: 0 3px 10px rgba(0,0,0,.23), 0 3px 10px rgba(0,0,0,.16);
    transform: scale(1.025);
  `}
`
ColorWrapper.displayName = 'ColorWrapper'

const Color = ({ color, onClick, active, title, hue }) => (
  <ColorWrapper color={color} onClick={onClick} active={active} hue={hue}>
    <span>{title || color}</span>
    {hue && <span>{hue}</span>}
  </ColorWrapper>
)

Color.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  title: PropTypes.string,
  hue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}


export default Color
