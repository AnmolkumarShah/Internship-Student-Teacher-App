import { getFirebase } from "react-redux-firebase"

export const register = credentials => {
  return(dispatch, getState, {getFirebase}) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection('students')
      .add({
        ...credentials,
        date : new Date(),
      })
      .then(() => {
        dispatch({
          type : 'STUDENT_REGISTER',
          credentials
        });
      })
      .catch(err => {
        dispatch({
          type : 'STUDENT_REGISTER_ERROR',
          err
        });
      })
  };
};

export const AddQue = credentials => {
  return(dispatch, getState, {getFirebase}) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection('questions')
      .add({
        ...credentials,
        date : new Date(),
      })
      .then(() => {
        dispatch({
          type : 'ADD_SUCCESS',
          credentials
        });
      })
      .catch(err => {
        dispatch({
          type : 'ADD_ERROR',
          err
        });
      })
  };
};