import {toast} from 'react-toastify'

const teacherReducer = (state = {}, action) => {
  switch(action.type){
    case 'TEACHER_REGISTER' : {
      toast.success("Teacher Registration Successfully");  
      return state;
    }
    case 'TEACHER_REGISTER_ERROR' : {
      toast.error("Registration Error");  
      return state;
    }
    default:
      return state;
  }
}

export default teacherReducer;