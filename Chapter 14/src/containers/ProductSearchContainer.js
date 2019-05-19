import { inject } from "mobx-react";

import ProductSearch from "../ProductSearch";

const withPropsMapped = inject(function(stores){
  return {
    onSearch: stores.uiStore.setQuery
  };
});

export default withPropsMapped(ProductSearch);