import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
    return (
        <>
            <h1>{toDos?.text}</h1>
            <h5> Createded at: {toDos?.id} </h5>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const {
        match: {
            params: { id },
        },
    } = ownProps;
    return {
        toDos: state.find((toDo) => toDo.id === parseInt(id)),
    };
};

export default connect(mapStateToProps)(Detail);
