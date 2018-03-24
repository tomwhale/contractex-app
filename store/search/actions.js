import * as actionTypes from './actionTypes'

export const saveFormValue = (key, value) => ({
  type: actionTypes.SAVE_FORM,
  key,
  value
})
