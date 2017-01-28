import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { sizes } from '../../styles/constants'


const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-grow: ${props => props.grow || 0};
  padding: ${({ padding }) => padding ? sizes[padding] + 'px' : 0};

  ${props => props.marginBetween && css`
    & > * + * {
      margin-top: ${sizes[props.marginBetween]}px !important;
    }
  `}
`

Column.propTypes = {
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'initial']),
  grow: PropTypes.number,
  children: PropTypes.node,
  marginBetween: PropTypes.oneOfType(Object.keys(sizes)),
  padding: PropTypes.oneOfType(Object.keys(sizes)),
}

export default Column
