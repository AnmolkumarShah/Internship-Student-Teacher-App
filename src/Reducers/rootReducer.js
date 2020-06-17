import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import StudentReducer from './studentReducer'
import TeacherReducer from './teacherReducer'
import AuthReducer from './authReducer'

const rootreducer = combineReducers({
  firebase : firebaseReducer,
  firestore : firestoreReducer,
  student : StudentReducer,
  auth : AuthReducer,
  teacher : TeacherReducer,
})

export default rootreducer;