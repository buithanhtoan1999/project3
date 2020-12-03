import React from "react";

//-------------------------------------

const Admin = React.lazy(() => import("./Admin"));
const Login = React.lazy(() => import(".//Login"));
const Logout = React.lazy(() => import("./Logout"));
const SignUp = React.lazy(() => import("./SignUp"));
const Home = React.lazy(() => import("./Home/Home"));
const Checkout = React.lazy(() => import("./Checkout/Checkout"));
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const Product = React.lazy(() => import("./Product/Product"));
const Cart = React.lazy(() => import("./Cart/Cart"));
const Album = React.lazy(() => import("./Album"));
const Product_Collections = React.lazy(() =>
  import("./Product/Product_Collections")
);
const Account = React.lazy(() => import("./Account/Account"));
const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
    protected: false,
  },
  {
    path: "/",
    component: Home,
    protected: true,
  },
  {
    path: "/signup",
    component: SignUp,
    protected: false,
  },
  {
    path: "/cart",
    component: Cart,
    protected: true,
  },
  {
    path: "/checkout",
    component: Checkout,
    protected: true,
  },
  {
    path: "/account",
    component: Account,
    protected: true,
  },
  {
    path: "/admin/dashboard",
    component: Dashboard,
    protected: true,
  },
  {
    path: "/product",
    component: Product,
    protected: true,
  },
  {
    path: "/product_collections",
    component: Product_Collections,
    protected: true,
  },
  {
    path: "/album/:id",
    component: Album,
    protected: true,
  },
];

export default routes;
