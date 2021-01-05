import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

//! actions
const addToDo = (text) => {
    return {
        type: ADD,
        text,
    };
};

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id),
    };
};
//----------------------------

const reducer = (toDos = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...toDos];

        case DELETE:
            return toDos.filter((toDo) => toDo.id !== action.id);

        default:
            return toDos;
    }
};

const store = createStore(reducer);

export default store;

export const actionCreators = {
    addToDo,
    deleteToDo,
};
