import { inject } from "mobx-react";

import ProductList from "../ProductList";

const withPropsMapped = inject(function(stores){
  return {
    onAddClick : stores.shoppingStore.addToCart
  };
});

export default withPropsMapped(ProductList);

