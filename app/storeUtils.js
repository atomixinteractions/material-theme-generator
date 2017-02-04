export const createTypes = (actions, namespace = 'default') =>
  actions.reduce((hash, actionName) => ({ ...hash, [actionName]: `${namespace}/${actionName}` }), {})


export const createReducer = (initialState, reducers) =>
  (state = initialState, { type, payload, meta }) => {
    const handler = reducers[type]

    if (handler) {
      state = handler(state, payload, meta) // eslint-disable-line no-param-reassign
    }

    return state
  }