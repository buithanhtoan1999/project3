import { Grid, Container, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";
import aogio from "../../img/aogio.jpg";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
const data = [
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "../../img/ao1.jpg",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
  {
    name: "Áo Phao Bomber SUPER 1283",
    description: "795,000₫",
    image: "",
  },
];
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
export default function Sale() {
  const classes = useStyles();
  return (
    <Container style={{ marginTop: "50px" }}>
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "30px",
          paddingTop: "20px",
        }}
      >
        <a className={classes.title} href="#">
          BLACK FRIDAY SALE
        </a>
      </h1>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item xs={3}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const Product = (props) => {
  return (
    <div>
      <img style={{ width: "100%" }} src={aogio} />
      <p>{props.item.name}</p>
      <p>{props.item.description}</p>
    </div>
  );
};
