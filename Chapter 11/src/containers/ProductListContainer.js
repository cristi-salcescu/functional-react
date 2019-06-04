import { inject, observer } from "mobx-react";

import ProductList from "../ProductList";

const withPropsMapped = inject(function(stores){
  return {
    products : stores.productStore.getProducts(),
    onAddClick : stores.shoppingStore.addToCart
  };
});

export default withPropsMapped(observer(ProductList));

