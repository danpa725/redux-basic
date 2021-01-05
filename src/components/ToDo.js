import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { actionCreators } from "../store"

const ToDo = ({ text, onBtnClick, id }) => {
    return (
    <li>
        <Link to = {`/${id}`}>
            { text }
        </Link>
        <button onClick={onBtnClick}>X</button>
    </li>)
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => {
            dispatch(actionCreators.deleteToDo(parseInt(ownProps.id)))
    }}
}

export default connect(null, mapDispatchToProps)(ToDo)