import React, { Component } from "react";
import aogio from "../../img/aogio.jpg";
import {
  Grid,
  Container,
  Button,
  ButtonGroup,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
} from "@material-ui/core";
import "./Product.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { number } from "yup";
import Product_relation from "./Product_relation";

function Product() {
  const [count, setCount] = React.useState(1);
  return (
    <Container className="product_img">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img className="picture" src={aogio}></img>
        </Grid>
        <Grid item xs={6}>
          <h3 className="product_h3">Áo sơ mi R.O.F caro 1489</h3>
          <p className="price">425.000₫</p>
          <p className="price">Chọn Size</p>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="S"
                control={<Radio color="primary" />}
                label="S"
                labelPlacement="start"
              />
              <FormControlLabel
                value="M"
                control={<Radio color="primary" />}
                label="M"
                labelPlacement="start"
              />
              <FormControlLabel
                value="L"
                control={<Radio color="primary" />}
                label="L"
                labelPlacement="start"
              />
              <FormControlLabel
                value="XL"
                control={<Radio color="primary" />}
                label="XL"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <p className="price">Chọn số lượng</p>
          <ButtonGroup>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography align="center" className="number">
              {count}
            </Typography>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <br></br>
          <button className="button_add">THÊM VÀO GIỎ</button>
          <button className="button_pay">TRẢ GÓP THẺ TÍN DỤNG</button>
        </Grid>
      </Grid>
      <Product_relation></Product_relation>
    </Container>
  );
}

export default Product;
