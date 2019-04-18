import { combineReducers } from 'redux';
import counterReducers from './counterReducers';

const myReducer = combineReducers ({
    counterReducers
});

export default myReducer;
