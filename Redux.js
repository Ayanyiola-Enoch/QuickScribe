import { createStore } from "redux";


// STATE CONTAINER
const initialState = {
    firstName: 'John',
    lastName: 'Ade',
};

// ACTION CREATORS

export const changeName = (firstName) => {
    return {
        type: 'change',
        firstName,
    };
};

// REDUCERS
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                firstName: action.firstName,
            };

        default:
            return state;
    }
};

export const store = createStore(reducers);
console.log('initialState', store.getState());