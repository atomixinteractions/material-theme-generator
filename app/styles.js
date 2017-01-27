import { injectGlobal } from 'styled-components'
import normalize from 'normalize-styled'

export default () => injectGlobal`
  ${normalize}
  body {
    padding: 0;
    margin: 0;
  }
`