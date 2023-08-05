import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
import reducer from './reducer';
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;