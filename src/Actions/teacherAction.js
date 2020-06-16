import { getFirebase } from "react-redux-firebase"

export const register = credentials => {
  return(dispatch, getState, {getFirebase}) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection('teachers')
      .add({
        ...credentials,
        date : new Date(),
      })
      .then(() => {
        dispatch({
          type : 'TEACHER_REGISTER',
          credentials
        });
      })
      .catch(err => {
        dispatch({
          type : 'TEACHER_REGISTER_ERROR',
          err
        });
      })
  };
};