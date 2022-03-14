import {default as reduxThunk} from "../redux/reducer"
import {default as reduxSaga} from "../redux-saga/reducer"
import {combineReducers} from "redux";


const reducers = combineReducers({
    reduxThunk,
    reduxSaga
});

export default reducers;
