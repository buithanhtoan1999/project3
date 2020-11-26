import {
  Grid,
  Container,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import React, { Component } from "react";
import aogio from "../../img/aogio.jpg";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { useHistory, Link } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import MuiAlert from "@material-ui/lab/Alert";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  productListState,
  cartState,
  addToCart,
} from "./Atoms/NewArrivalState";
import "./NewArrival.css";
const useStyles = makeStyles((theme) => ({
  title: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "coral",
      fontFamily: "Times New Roman",
    },
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NewArrival(props) {
  const Itemlist = useRecoilValue(productListState);
  const classes = useStyles();
  const history = useHistory();
  const handleViewDetail = () => {
    history.push("/product");
  };
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddtoCart = (product) => {
    setOpen(true);
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Container>
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <a className={classes.title} href="#">
          NEW ARRIVAL
        </a>
      </h1>
      <Grid container spacing={5}>
        {Itemlist.map((product) => (
          <Grid item xs={3}>
            <div className="newarrival">
              <img style={{ width: "100%" }} src={aogio} />
              <Link to="/product" className="link_item">
                {product.product.name}
              </Link>
              <p>{product.product.price}</p>
              <Grid container style={{ padding: 10 }} spacing={0}>
                <Grid item xs={6}>
                  <Button
                    className="btn_view"
                    onClick={() => handleViewDetail()}
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    <Typography variant="subtitle2">Xem chi tiết</Typography>
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    className="btn_view"
                    variant="contained"
                    onClick={() => handleAddtoCart(product)}
                    color="secondary"
                    size="small"
                  >
                    <Typography variant="subtitle2">Thêm vào giỏ</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Thêm vào giỏ hàng thành công
                </Alert>
              </Snackbar>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
