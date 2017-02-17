import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'


const AlertTemplate = ({ header, footer, children }) => (
  <Col>
    {header && <Col tagName="header">{header}</Col>}
    <Row center="xs">
      <Col>
        {children}
      </Col>
    </Row>
    {footer && <Col tagName="footer">{footer}</Col>}
  </Col>
)

AlertTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
}

export default AlertTemplate
