import { handleActions } from "redux-actions";

export default handleActions(
    { place_order },
    []
);

function place_order(orders, action) {
    return [ ...orders, action.order];
}

