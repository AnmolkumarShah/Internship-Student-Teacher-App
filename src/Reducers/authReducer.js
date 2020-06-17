import {toast} from 'react-toastify'

const authReducer = (state = {}, action) => {
  switch(action.type){
    case 'SIGNIN':{
      toast('Welcome Back');
      return state;
    }
    case 'SIGNIN_ERR':{
      toast.error('Signin Error');
      return state;
    }
    case 'SIGN_OUT':{
      toast('You Sign Out');
      return state;
    }
    case 'SIGN_OUT_ERR':{
      toast.error('Signout Error');
      return state;
    }
    case 'COURSE_ADD' : {    
      toast.success("A New Course Has Been Added");  
      return state;
    }
    case 'COURSE_ADD_ERR':{
      toast.error('Signout Error');
      return state;
    }
    default:
      return state
  }
}

export default authReducer;