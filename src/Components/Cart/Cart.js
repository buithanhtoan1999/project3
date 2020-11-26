import {
  Container,
  Grid,
  IconButton,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartState,
  removeCart,
  changeQuantity,
} from "../Home/Atoms/NewArrivalState";
import "./Cart.css";
import aogio from "../../img/aogio.jpg";
import ClearIcon from "@material-ui/icons/Clear";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
export default function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const handleremoveCart = (product) => {
    const newCart = removeCart(cart, product);
    setCart(newCart);
  };
  const handleChangeQuantity = (id, quantity) => {
    const c = changeQuantity(cart, id, quantity);
    setCart(c);
  };
  const history = useHistory();
  const handleClickPayment = () => {
    history.push("/checkout");
  };
  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total +=
        parseInt(element.product.product.price.slice(0, 3)) * element.quantity;
    });
    return total;
  };

  console.log(cart, cart.quantity);
  return (
    <Container>
      <div className="header_cart">
        <h1>Giỏ hàng của bạn</h1>
        <p>Có {cart.length} sản phẩm trong giỏ hàng </p>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <ul className="list_product">
              {cart.map((product) => (
                <ItemCart
                  product={product}
                  handleremoveCart={handleremoveCart}
                  handleChangeQuantity={handleChangeQuantity}
                />
              ))}
            </ul>
          </Grid>

          <Grid xs={4}>
            <div className="bill">
              <Container>
                <h2 className="info_bill"> Thông tin đơn hàng</h2>
                <h3 className="total_price">
                  Tổng tiền: <h2 className="money">{getTotal()},000₫</h2>{" "}
                </h3>
                <p className="text">
                  Phí vận chuyển sẽ được tính ở trang thanh toán. Bạn cũng có
                  thể nhập mã giảm giá ở trang thanh toán.
                </p>

                <button onClick={handleClickPayment} className="btn_checkout">
                  THANH TOÁN
                </button>

                <Link to="/" className="link_back_to_home">
                  Tiếp tục mua hàng
                  <br></br>
                </Link>

                <ArrowBackIcon className="back_icon"></ArrowBackIcon>

                <br></br>
              </Container>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
const ItemCart = ({ product, handleremoveCart, handleChangeQuantity }) => {
  const [count, setCount] = useState(product.quantity);
  return (
    <li className="item_productCart">
      <Button
        onClick={() => handleremoveCart(product)}
        style={{ float: "right" }}
      >
        <ClearIcon />
      </Button>
      <Grid container spacing={3}>
        <Grid item>
          <img width="100" height="100" src={aogio}></img>
        </Grid>
        <Grid item xs={9}>
          <p className="name">{product.product.product.name}</p>
          <p className="price">{product.product.product.price}</p>
          <ButtonGroup>
            <Button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                  handleChangeQuantity(product.product.product.id, count);
                }
              }}
              aria-label="increase"
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography align="center" className="number">
              {count}
            </Typography>
            <Button
              onClick={() => {
                setCount(count + 1);
                handleChangeQuantity(product.product.product.id, count);
              }}
              aria-label="increase"
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </li>
  );
};
