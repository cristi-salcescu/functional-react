import { connect } from "react-redux";
import { addToCart } from "../actions/shoppingCartActions";
import ProductList from "../ProductList";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: function(product){
      dispatch(addToCart(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
