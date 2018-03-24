import * as actionTypes from './actionTypes'
import * as reducers from './reducers'

const initialState = { }

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case actionTypes.SAVE_FORM:
      return reducers.saveFormValue({ state })
    default:
      return state
  }
}
