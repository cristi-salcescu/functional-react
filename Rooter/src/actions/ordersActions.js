function placeOrder(order) {
    return {
        type: "place_order",
        order
    };
}

export { placeOrder };
