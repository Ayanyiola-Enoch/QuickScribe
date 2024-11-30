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
const reducers = (state, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                firstName: action.firstName,
            }

        default:

    }
};