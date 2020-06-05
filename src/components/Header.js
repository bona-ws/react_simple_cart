import React, {Component} from "react";
import {connect} from "react-redux";

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Cart: {this.props.totalCart} </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalCart: state.cartReducer.total
});

export default connect(mapStateToProps)(Header);
