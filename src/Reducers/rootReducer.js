import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import StudentReducer from './studentReducer'
import TeacherReducer from './teacherReducer'

const rootreducer = combineReducers({
  firebase : firestoreReducer,
  firestore : firestoreReducer,
  student : StudentReducer,
  teacher : TeacherReducer,
})

export default rootreducer;