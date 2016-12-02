import * as actionTypes from 'actions/<%= name %>Action'

// ------------------------------------
// state
// ------------------------------------
const initialState = {

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [actionTypes.<%= upperName %>_ACTION_TYPE] : (state, action) => {
    return Object.assign({}, state, {

    });
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function <%= name %> (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
