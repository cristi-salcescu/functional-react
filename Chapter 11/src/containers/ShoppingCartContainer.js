import { inject, observer } from "mobx-react";

import ShoppingCart from "../ShoppingCart";

const withPropsMapped = inject(function(stores){
  return {
    cart : stores.shoppingStore.toCartView(),
    onRemoveClick: stores.shoppingStore.removeFromCart
  };
});

export default withPropsMapped(observer(ShoppingCart));