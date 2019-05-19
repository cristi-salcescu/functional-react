import { observable, action } from "mobx";

export default function ShoppingCartStore(){
  const shoppingMap = observable.map();

  function toCartView() {
    return toCartViewFromMap(shoppingMap);
  }

  //actions
  const addToCart = action(function(product){
    shoppingMap.set(product.id, incrementProductQuantity(shoppingMap, product));
  });

  const removeFromCart = action(function(product){
    shoppingMap.delete(product.id);
  });

  //pure
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

  function toCartViewFromMap(shoppingMap) {
    const shoppingList = Array.from(shoppingMap.values());
    return Object.freeze({
      list: shoppingList,
      total: shoppingList.reduce(addPrice, 0)
    });
  }

  function addPrice(totalPrice, line) {
    return totalPrice + line.price * line.quantity;
  }

  return Object.freeze({
    addToCart,
    removeFromCart,
    toCartView
  });
}
