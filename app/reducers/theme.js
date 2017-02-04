import { REPLACE_CURRENT_THEME } from '../consts/actionTypes';
import lightBaseTheme from '../themes/lightBaseTheme'


export default (state = lightBaseTheme, action) => {
  switch (action.type) {
    case REPLACE_CURRENT_THEME:
      return action.theme
    default :
      return state
  }
}
