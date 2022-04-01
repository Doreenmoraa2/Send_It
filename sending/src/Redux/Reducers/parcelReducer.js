import { combineReducers } from "redux";
import { CREATEPARCEL_SUCCESS, CREATEPARCEL_FAIL} from "../ActionTypes/ParcelActionType";


const createparcelState={
    success:false,
    error:"",
}

const createparcelReducer =(state=createparcelState,action)=>{
    switch(action.type){
        case CREATEPARCEL_SUCCESS:
            return{
                ...state,
                success:true,
                error:"",
               
            }
            case CREATEPARCEL_FAIL:
                return{
                    ...state,
                    success:false,
                    error:action.error,
                    
                };
                default:
                    return state;
    }
}
const parcelReducer = combineReducers({
    createparcel:createparcelReducer
})
export default parcelReducer

