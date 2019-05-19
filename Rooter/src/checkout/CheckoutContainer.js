import { connect } from "react-redux";

import { toCartView } from "../reducers/shoppingCart";
import { placeOrder } from "../actions/ordersActions";
import Checkout from "./Checkout";

function mapStateToProps(state) {
  return {
    cart: toCartView(state.shoppingCart)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlaceOrder: function(order){
      dispatch(placeOrder(order));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
