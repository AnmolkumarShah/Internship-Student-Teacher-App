export const signIn = (credential) => {
  return(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credential.email, credential.password)
      .then(() => {
        dispatch({type : 'SIGNIN' });
      })
      .catch((err) => {
        dispatch({type : 'SIGNIN_ERR', err});
      });
  };
};

export const signOut = () => {
  return(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type : 'SIGN_OUT'});
      })
      .catch(err => {
        dispatch({type : 'SIGN_OUT_ERR', err});
      });
  };
};

export const addCourse = details => {
  return(dispatch, getState, {getFirebase}) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection('courses')
      .add({
        ...details,
        date : new Date(),
      })
      .then(() => {
        dispatch({
          type : 'COURSE_ADD',
          details
        });
      })
      .catch(err => {
        dispatch({
          type : 'COURSE_ADD_ERR',
          err
        });
      })
  };
};