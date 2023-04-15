import React from "react";
import CartItem from "./CartItem/CartItem";
import CartTotal from "../../Components/CartTotal";
import {
  removeAllCart,
  removeOneCart,
  clearCart,
  getAllProduct,
  shop,
  addToCart,
} from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./Cart.module.css";
import { NavBar } from "../../Components/Navbar";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import { BiShoppingBag } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const cart = useSelector((state) => state.shoppingCart);

  let discount = 0;
  let shippingCost = 0;
  cart?.map((elem) => {
    let preciDiscount = elem.price * (1 - elem.discount / 100);
    discount += elem.quantity * (elem.price - preciDiscount);
    shippingCost += elem.price * elem.quantity;
  });

  const delFromCart = (id, color, size, UUID, all = false) => {
    if (all) {
      dispatch(removeAllCart(id));
    } else {
      dispatch(removeOneCart(id, color, size, UUID));
    }
  };

  const clearCartShop = () => {
    dispatch(clearCart());
  };

  const handleShop = () => {
    dispatch(shop(cart));
    dispatch(clearCart());
  };

  const adToCart = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className={style.main}>
      <NavBar />
      <FilterNavBar />
      <div className={style.mainTitle}>
        <i className={style.bagIcon}>
          <BiShoppingBag />
        </i>
        <h1 className={style.cartTitle}>MY CART</h1>
      </div>
      <div className={style.flexContainer}>
        <article className={style.cartContainer}>
          <div className={style.cardContainer}>
            {cart.map((e) => {
              return (
                <CartItem
                  key={crypto.randomUUID()}
                  productCart={e}
                  _id={e.id}
                  name={e.name}
                  price={e.price}
                  quantity={e.quantity}
                  stock={e.stock}
                  image={e.image}
                  size={e.size}
                  color={e.color}
                  discount={e.discount}
                  UUID={e.UUID}
                  delFromCart={delFromCart}
                  addItem={adToCart}
                />
              );
            })}
          </div>
        </article>
        <div className={style.secondContainer}>
          <div className={style.paymentContainer}>
            <div className={style.codeContainer}>
              <input
                type="text"
                className={style.inputCode}
                placeholder="Enter Code"
              />
              <button className={style.buttonSubmit}>Submit</button>
            </div>
            <div className={style.detailsContainer}>
              <h2 className={style.detailTitle}>Details Summary</h2>
              <div className={style.detail}>
                <span>Shipping Cost</span>
                <span>$ {shippingCost}</span>
              </div>
              <div className={style.detail}>
                <span>Discount</span>
                <span>-$ {parseFloat(discount.toFixed(2))}</span>
              </div>
              <div className={style.detail}>
                <span>Taxes</span>
                <span style={{ color: "green" }}>N/A</span>
              </div>
              <hr />
              <CartTotal />
              <hr />
            </div>
            <button className={style.buttonPay}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
