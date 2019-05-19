import { handleActions } from "redux-actions";

export default handleActions(
    { set_query },
    {
        query : { text: ""}
    }
);

function set_query(state, action) {
    return { 
        ...state, 
        query : action.query
    };
}