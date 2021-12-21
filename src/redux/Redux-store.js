import {combineReducers, createStore} from "redux";
import tableReducer from './Table-reducer';


let reducers = combineReducers({
    tablePage: tableReducer
});

let store = createStore(reducers);

window.store = store;


export default store;