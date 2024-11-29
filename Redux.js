import { createStore } from "redux";


// STATE CONTAINER
const initialState = {
    firstName: 'John',
};

// ACTION CREATORS

const changeName = (firstname) => {
    return {
        type: 'create',
        firstname
    }
}