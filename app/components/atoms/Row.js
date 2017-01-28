import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { sizes } from '../../styles/constants'


const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-grow: ${props => props.grow || 0};
  padding: ${({ padding }) => padding ? sizes[padding] + 'px' : 0};
  justify-content: ${props => props.justifyContent || 'flex-start'};

  ${props => props.marginBetween && css`
    &> *+* {
      margin-left: ${sizes[props.marginBetween]}px !important;
    }
  `}
`

Row.propTypes = {
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'initial']),
  grow: PropTypes.number,
  justifyContent: PropTypes.string,
  children: PropTypes.node,
  marginBetween: PropTypes.oneOfType(Object.keys(sizes)),
  padding: PropTypes.oneOfType(Object.keys(sizes)),
}

export default Row
