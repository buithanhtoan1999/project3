import React, { Fragment } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "./Header/Header";
import Slideshow from "./Slideshow/Slideshow";
import Footer from "./Footer/Footer";
import Sale from "./Home/Sale";

//-------------------------------------

const Layout = React.memo((props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = matches ? true : openSidebar;

  const drawerWidth = 300;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    container: {
      flexGrow: 1,
      // padding: theme.spacing(3),
      paddingLeft: matches ? drawerWidth : 0,
      paddingTop: 60,
    },
    content: {
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer></Footer>
    </Fragment>
  );
});

export default Layout;
