import api from "../api/productsAPI";
import { resetProducts } from "../actions/productsActions";

function fetchProducts() {
  return function(dispatch) {
    api.fetchProducts().then(data =>
      dispatch(resetProducts(data))
    );
  };
}

export { fetchProducts };
    