const initialState = {
    isLogedin : false,
    userName : ''
}

function authReducer(state = initialState, action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                isLogedin : true,
                userName : action.userName
            }
        case 'LOGOUT':
            return{
                ...state,
                isLogedin : false,
                userName:''
            }
        default :
        return state
    }
}
export default authReducer