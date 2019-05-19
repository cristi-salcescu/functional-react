import MicroEmitter from "micro-emitter";

function addProductToMap(product, shoppingMap){
  const newShoppingMap = { ...shoppingMap };
  newShoppingMap[product.id] = incrementProductQuantity(product, shoppingMap);
  return Object.freeze(newShoppingMap);
}

function removeProductFromMap(product, shoppingMap){
  const newShoppingMap = { ...shoppingMap };
  delete newShoppingMap[product.id];
  return Object.freeze(newShoppingMap);
}

function incrementProductQuantity(product, shoppingMap) {
  const quantity = getProductQuantity(product, shoppingMap) + 1;
  return Object.freeze({ ...product, quantity });
}

function getProductQuantity(product, shoppingMap) {
  const existingProduct = shoppingMap[product.id];
  if (existingProduct) {
    return existingProduct.quantity;
  }

  return 0;
}

function toCartView(shoppingMap) {
  const shoppingList = Object.values(shoppingMap);
  return Object.freeze({
    list: shoppingList,
    total: shoppingList.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

export default function ShoppingCartStore() {
  const eventEmitter = new MicroEmitter();
  const CHANGE_EVENT = "change";

  let shoppingMap = new Map();

  function addToCart(product) {
    shoppingMap = addProductToMap(product, shoppingMap);
    eventEmitter.emit(CHANGE_EVENT);
  }

  function removeFromCart(product) {     
    shoppingMap = removeProductFromMap(product, shoppingMap);
    eventEmitter.emit(CHANGE_EVENT);
  }

  function onChange(handler) {
    eventEmitter.on(CHANGE_EVENT, handler);
  }

  function offChange() {
    eventEmitter.off(CHANGE_EVENT);
  }

  function get() {
    return toCartView(shoppingMap);
  }

  return Object.freeze({
    addToCart,
    removeFromCart,
    get,
    onChange,
    offChange
  });
}