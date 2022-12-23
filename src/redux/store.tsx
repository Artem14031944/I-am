import { createStore ,combineReducers } from 'redux';
import mainReducer from './redusers';


const rootReducer = combineReducers({
    mainReducer,
});


export const store = createStore(rootReducer);