import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import GeneratorTemplate from '../templates/GeneratorTemplate'
import ThemeSetup from '../organisms/ThemeSetup'


const mapStateToProps = state => ({ theme: state.setup })

const enhance = compose(
  connect(mapStateToProps),
)


const PreviewMUIPage = ({ theme }) => (
  <GeneratorTemplate picker={<ThemeSetup theme={theme} />}>
    asd
  </GeneratorTemplate>
)


export default enhance(PreviewMUIPage)
