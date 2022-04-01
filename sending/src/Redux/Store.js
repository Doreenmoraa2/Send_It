import { applyMiddleware,createStore, combineReducers } from "redux";
import userReducer from "./Reducers/userReducer";
import parcelReducer from "./Reducers/parcelReducer";

import thunk from 'redux-thunk'


const rootReducer =combineReducers({
    user:userReducer,
    parcel:parcelReducer
    
})



const store =createStore(rootReducer, applyMiddleware(thunk))

export default store;