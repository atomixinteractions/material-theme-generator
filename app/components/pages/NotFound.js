import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import AlertTemplate from '../templates/AlertTemplate'


const Big = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 300;
`

const NotFoundPage = (props) => (
  <AlertTemplate>
    <Big>Page not found!</Big>
    <Link to="/">Go to home page</Link>
  </AlertTemplate>
)

export default NotFoundPage
