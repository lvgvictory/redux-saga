import { INCREMENT, DECREMENT } from './actionTypes';

// create Action

export const incrementAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
};

export const decrementAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
};