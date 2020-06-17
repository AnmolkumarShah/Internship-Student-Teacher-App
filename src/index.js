import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import firebase from './Config/firebaseConfig'
import {createFirestoreInstance} from 'redux-firestore'
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'


const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))
const rrfProps = {
  firebase,
  config:{},
  dispatch : store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth))
  return(
    <div className='text-center'>
      <div className='spinner-border  text-primary'
      style={{width : '10rem', height: '10rem', marginTop:'100px' }}
      role="status"
      >
        <span className='sr-only'>Loading. . .</span>
      </div>
    </div>
  );
  return children;
}
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
