import { combineReducers } from "redux";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_RESET } from "../ActionTypes/UserActionType";
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../ActionTypes/UserActionType";


const loginState={
    success:false,
    error:"",
    user:{}
}

const signupState={
    success:false,
    error:"",
}

const loginReducer =(state=loginState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                success:true,
                error:"",
                user:action.user,
            }
            case LOGIN_FAIL:
                return{
                    ...state,
                    success:false,
                    error:action.error,
                    user:{},
                };

                case LOGIN_RESET: 
                return loginState
                
                default:
                    return state;
    }
}

const signupReducer =(state=signupState,action)=>{
    switch(action.type){
        case SIGNUP_SUCCESS:
            return{
                ...state,
                success:true,
                error:"",
               
            }
            case SIGNUP_FAIL:
                return{
                    ...state,
                    success:false,
                    error:action.error,
                    
                };
                default:
                    return state;
    }
}

const userReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer
})

export default userReducer

