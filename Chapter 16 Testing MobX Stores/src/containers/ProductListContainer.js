import { inject, observer } from "mobx-react";
import partial from "lodash/partial";

import ProductList from '../ProductList';

const withPropsMapped = inject(function(stores){
  return {
    products : filterProducts(stores.productStore.getProducts(), stores.uiStore.getQuery()),
    onAddClick : stores.shoppingStore.addToCart
  };
});

function filterProducts(products, query){
  return products.filter(isInQuery(query));
}

function isInQuery(query){
  return function(product){
    return product.name.includes(query.text);
  };
}

export default withPropsMapped(observer(ProductList));

