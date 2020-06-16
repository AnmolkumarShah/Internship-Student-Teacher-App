const teacherReducer = (state = {}, action) => {
  switch(action.type){
    case 'TEACHER_REGISTER' : {
      console.log(action.credentials)
      console.log("registered")
      return state;
    }
    case 'TEACHER_REGISTER_ERROR' : {
      console.log("error")
      return state;
    }
    default:
      return state;
  }
}

export default teacherReducer;