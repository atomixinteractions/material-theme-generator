import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import material from 'google-material-color'


const ColorWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 20%;
  flex-shrink: 0;
  background-color: ${props => material.get(props.color || 'Blue Grey', 500)};
  color: ${props => material.getText(props.color || 'Blue Grey')};
  transition: all .3s;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
  ${''/* box-shadow: 0 2px 3px rgba(0,0,0,.1); */}
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

const Color = ({ color, onClick, active, children }) => (
  <ColorWrapper color={color} onClick={onClick} active={active}>
    {children || color}
  </ColorWrapper>
)

Color.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export default Color
