import { inject, observer } from "mobx-react";

import ShoppingCart from "../ShoppingCart";

const mapToProps = inject(function(stores){
  return {
    cart : stores.shoppingStore.toCartView(),
    onRemoveClick: stores.shoppingStore.removeFromCart
  };
});

export default mapToProps(observer(ShoppingCart));