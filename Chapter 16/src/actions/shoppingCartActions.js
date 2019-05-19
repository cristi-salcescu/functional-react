function addToCart(product) {
    return {
        type: "add_to_cart",
        product
    };
}

function removeFromCart(product) {     
    return {
        type: "remove_from_cart",
        product
    };
}


export { addToCart, removeFromCart };
