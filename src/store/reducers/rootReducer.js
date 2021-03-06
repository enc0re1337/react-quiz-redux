import {combineReducers} from 'redux'
import quizReducer from './quiz'
import createReducer from './Create'
import authReducer from './Auth'

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer
})