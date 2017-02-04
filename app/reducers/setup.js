import { createTypes, createReducer } from '../storeUtils'

const T = createTypes(['setThemeBase', 'setPrimary', 'setSecondary'], 'setup')

const initialState = {
  base: 'light',
  primary: '',
  secondary: '',
}

export default createReducer(initialState, {
  [T.setThemeBase]: (state, payload) => ({ ...state, base: 'payload' }),
  [T.setPrimary]: (state, primary) => ({ ...state, primary }),
  [T.setSecondary]: (state, secondary) => ({ ...state, secondary }),
})


export function setThemeBase(base) {
  return {
    type: T.setThemeBase,
    payload: base,
  }
}

export function setPrimaryColor(color) {
  return  {
    type: T.setPrimary,
    payload: color,
  }
}

export function setSecondaryColor(color) {
  return  {
    type: T.setSecondary,
    payload: color,
  }
}
