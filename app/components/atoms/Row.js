import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { sizes } from '../../styles/constants'


const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => props.wrap || 'nowrap'};

  ${props => props.marginBetween && css`
    & > * + * {
      margin-left: ${sizes[props.marginBetween]}px;
    }
  `}
`

Row.propTypes = {
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'initial']),
  children: PropTypes.node,
  marginBetween: PropTypes.oneOfType(Object.keys(sizes)),
}

export default Row
