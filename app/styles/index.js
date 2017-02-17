import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'
import material from 'google-material-color'


export default () => injectGlobal`
  ${normalize}
  body {
    padding: 0;
    margin: 0;
    background-color: ${material.get('Blue Grey', 800)};
    color: ${material.getText('Blue Grey', 800)};
  }

  a {
    color: white;
  }
`

export const Theme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 1,
    container: {
      sm: 46,
      md: 61,
      lg: 78,
    },
    breakpoints: {
      xs: 0,
      sm: 48,
      md: 64,
      lg: 75,
    },
  },
}
