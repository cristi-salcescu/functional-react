import { handleActions } from "redux-actions";
import { Map } from "immutable";

export default handleActions(
    { add_to_cart, remove_from_cart },
    Map()
);

function add_to_cart(shoppingMap, {product}) {
    const newProduct = incrementProductQuantity(shoppingMap, product);
    return shoppingMap.set(product.id, newProduct);
}

function remove_from_cart(shoppingMap, {product}) {
    return shoppingMap.remove(product.id);
}

function incrementProductQuantity(shoppingMap, product) {
    const quantity = getProductQuantity(shoppingMap, product) + 1;
    return Object.freeze({ ...product, quantity });
}

function getProductQuantity(shoppingMap, product) {
    const existingProduct = shoppingMap.get(product.id);
    if (existingProduct) {
        return existingProduct.quantity;
    }

    return 0;
}

//selectors
function toCartView(shoppingMap) {
    const shoppingList = Array.from(shoppingMap.values());
    return Object.freeze({
        list: shoppingList,
        total: shoppingList.reduce(addPrice, 0)
    });
}

function addPrice(totalPrice, line) {
    return totalPrice + line.price * line.quantity;
}

export { toCartView };





