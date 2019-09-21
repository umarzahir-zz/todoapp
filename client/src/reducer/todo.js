const initState = {isDelete: false, isEdit: false}

const todoReducer = (state = initState, action) => {

        switch(action.type){
            case "TODO_DELETE":
            return{
                ...state,
                isDelete: true
            }
            case "TODO_EDIT": 
            return {
                ...state,
                isEdit: true
            }
            case "TODO_CREATE":
                return{
                    ...state,
                    isCreated: true
                }

            default: return {...state, isDelete: false, isEdit: false}
        }
     
}

export default todoReducer