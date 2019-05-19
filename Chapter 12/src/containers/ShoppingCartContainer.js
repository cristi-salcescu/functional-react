import { connect } from "react-redux";
import { removeFromCart } from "../actions/shoppingCartActions";
import { toCartView } from "../reducers/shoppingCart";
import ShoppingCart from "../ShoppingCart";

function mapStateToProps(state) {
  return {
    cart: toCartView(state.shoppingCart)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick: function(product){
      dispatch(removeFromCart(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
