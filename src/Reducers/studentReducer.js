import {toast} from 'react-toastify'

const studentReducer = (state = {}, action) => {
  switch(action.type){
    case 'STUDENT_REGISTER' : {    
      toast.success("You Register Successfully");  
      return state;
    }
    case 'ADD_SUCCESS' : {    
      toast.success("Thanks For Asking Question");  
      return state;
    }
    case 'STUDENT_REGISTER_ERROR' : {
      toast.error("Registration Error");  
      return state;
    }
    case 'ADD_ERROR' : {
      toast.error("Question Not Added");  
      return state;
    }
    default:
      return state;
  }
}

export default studentReducer;