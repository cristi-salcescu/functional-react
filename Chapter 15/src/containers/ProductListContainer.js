import { connect } from "react-redux";
import { partial } from "lodash";
import { addToCart } from "../actions/shoppingCartActions";
import ProductList from "../ProductList";

function mapStateToProps(state) {
  return {
    products: filterProducts(state.products, state.ui.query)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: function(product){
      dispatch(addToCart(product));
    }
  };
}

function filterProducts(products, query){
  const isInQuery = partial(isProductInQuery, query);
  return products.filter(isInQuery);
}

function isProductInQuery(query, product){
  return product.name.includes(query.text); 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
