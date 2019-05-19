import { handleActions } from "redux-actions";
import { List } from "immutable";

export default handleActions(
    { reset_products },
    List()
);

function reset_products(products, action) {
    return List(action.products);
}


