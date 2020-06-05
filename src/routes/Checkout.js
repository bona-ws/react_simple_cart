import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import history from "./history";
import {buyItems} from "../modules/actions/cartActions";

export class Checkout extends Component {
  buyNow() {
    this.props.buyItems();
    history.push("/");
  }

  render() {
    const addedItems = this.props.addedItems.slice(1);

    return (
      <div style={style.container}>
        <div style={style.title}>
          <Link style={style.link} to="/">
            &lt; Back
          </Link>
          <button style={style.button} onClick={() => this.buyNow()}>
            Buy Now
          </button>
        </div>

        {addedItems.length > 0
          ? addedItems.map(
              item =>
                item.quantity !== 0 && (
                  <div key={item.id} style={style.itemContainer}>
                    <span>{item.title}</span>
                    <span>{item.quantity}</span>
                  </div>
                )
            )
          : "No Item Added"}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedItems: state.cartReducer.addedItems
});

const mapDispatchToProps = {
  buyItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const style = {
  container: {
    width: "60vw"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "14px"
  },
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "14px"
  },
  button: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    background: "blue",
    color: "white"
  },
  link: {
    color: "#444",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
