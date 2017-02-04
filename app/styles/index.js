import { injectGlobal } from 'styled-components'
import normalize from 'normalize-styled'
import material from 'google-material-color'


export default () => injectGlobal`
  ${normalize}
  body {
    padding: 0;
    margin: 0;
    background-color: ${material.get('Blue Grey', 800)};
    color: ${material.getText('Blue Grey', 800)};
  }
`