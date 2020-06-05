import React, {Component} from "react";
import {connect} from "react-redux";

import history from "./history";
import {getItems} from "../modules/actions/getItems";
import {addItemCart, subtractItemCart} from "../modules/actions/cartActions";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 10,
      isEmptyCart: false
    };
  }
  componentDidMount() {
    this.props.getItems();
  }

  loadMore() {
    this.setState(prev => {
      return {visible: prev.visible + 10};
    });
  }

  checkout() {
    this.props.totalCart > 0
      ? history.push("/checkout")
      : this.setState({isEmptyCart: true});
  }

  render() {
    const {visible, isEmptyCart} = this.state;
    const {items, addedItems, isLoading, error} = this.props;

    return isLoading ? (
      <p>Loading..</p>
    ) : error ? (
      `${error}`
    ) : (
      <div style={style.container}>
        <div style={style.title}>
          <h1>Item Lists </h1>

          <button style={style.button} onClick={() => this.checkout()}>
            Checkout
          </button>
        </div>

        <p style={style.message}>
          {isEmptyCart && "You haven't add any item."}
        </p>

        {items &&
          items
            .map(
              item =>
                addedItems.find(addedItem => addedItem.id === item.id) || item
            )
            .slice(0, visible)
            .map(item => (
              <div key={item.id} style={style.itemContainer}>
                <div>
                  <span> {item.title} </span>
                </div>
                <div style={style.qty}>
                  <button
                    style={style.buttonQty}
                    onClick={() =>
                      this.props.subtractItemCart(item.id, item.title)
                    }
                  >
                    -
                  </button>

                  <span> {item.quantity || 0} </span>

                  <button
                    style={style.buttonQty}
                    onClick={() => this.props.addItemCart(item.id, item.title)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
        <button onClick={() => this.loadMore()}>Load More</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemReducer.items,
  addedItems: state.cartReducer.addedItems,
  totalCart: state.cartReducer.total,
  isLoading: state.itemReducer.isLoading,
  error: state.error
});

const mapDispatchToProps = {
  getItems,
  addItemCart,
  subtractItemCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const style = {
  container: {
    width: "60vw"
  },
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "14px"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    background: "blue",
    color: "white"
  },
  qty: {
    width: "80px",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    padding: "4px",
    borderRadius: "4px"
  },
  buttonQty: {
    background: "transparent",
    color: "green",
    border: "none",
    fontSize: "14px",
    fontWeight: "bold"
  },
  message: {
    background: "#ffcccb",
    lineHeight: "40px",
    textAlign: "center",
    color: "red"
  }
};
