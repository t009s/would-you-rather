import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions.js'
import { receiveUsers } from '../actions/users.js'
import { setAuthedUser } from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ authedUser, users, questions }) => {
      dispatch(receiveQuestions(questions))
      dispatch(receiveUsers(users))
      dispatch(setAuthedUser(authedUser))
      dispatch(hideLoading())
    })
  }
}