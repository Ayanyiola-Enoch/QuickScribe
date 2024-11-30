import { createStore } from "redux";


// STATE CONTAINER
const initialState = {
    firstName: 'John',
};

// ACTION CREATORS

const changeName = (firstname) => {
    return {
        type: 'change',
        firstname,
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

const store = createStore(reducers);
console.log('initialState', store.getState());