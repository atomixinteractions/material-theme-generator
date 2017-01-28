import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { sizes } from '../../styles/constants'


const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${props => props.wrap || 'nowrap'};

  ${props => props.marginBetween && css`
    & > * + * {
      margin-top: ${sizes[props.marginBetween]}px;
    }
  `}
`

Column.propTypes = {
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'initial']),
  children: PropTypes.node,
  marginBetween: PropTypes.oneOfType(Object.keys(sizes)),
}

export default Column
