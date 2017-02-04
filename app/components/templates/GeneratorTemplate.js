import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Row from '../atoms/Row'
import Column from '../atoms/Column'


const TemplateWrapper = styled(Column)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const Picker = styled(Column)`
  flex-grow: 1;
  flex-shrink: 0;
  width: 50%;
`

const Preview = styled(Column)`
  flex-grow: 1;
  flex-shrink: 0;
  width: 50%;
  overflow-y: auto;
`


const GeneratorTemplate = ({ header, footer, picker, children }) => (
  <TemplateWrapper>
    {header}
    <Row style={{ flexGrow: 1 }}>
      <Picker>{picker}</Picker>
      <Preview>
        {children}
      </Preview>
    </Row>
    {footer}
  </TemplateWrapper>
)

GeneratorTemplate.propTypes = {
  picker: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
}

export default GeneratorTemplate
