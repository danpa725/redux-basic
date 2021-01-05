import React, { useState } from "react";
//connect 메서드로 연결 컴포넌트와 store 연결
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";
const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
};

//! state from store.js -> 스토어와 컴포넌트 연결!
const mapStateToProps = (state, ownProps) => {
    return {
        toDos: state,
    };
};
//! action - dispatch to porps!
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    };
};

//!connect() 메서드로 연결
export default connect(mapStateToProps, mapDispatchToProps)(Home);
