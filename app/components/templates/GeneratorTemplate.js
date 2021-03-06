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
TemplateWrapper.displayName = 'TemplateWrapper'

const Picker = styled(Column)`
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 600px;
  overflow-x: auto;
`
Picker.displayName = 'Picker'

const Preview = styled(Column)`
  flex-grow: 1;
  flex-shrink: 0;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
`
Preview.displayName = 'Preview'


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
