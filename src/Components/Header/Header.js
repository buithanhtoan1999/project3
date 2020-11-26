import React from "react";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Dropdown from "react-multilevel-dropdown";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../Home/Atoms/NewArrivalState";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  dropdownButton: {
    backgroundColor: "#3f51b5",
    color: "#1D1B20 ",
    borderColor: "red",
    position: "right",
    "&:hover": {
      color: "#F57115",
    },
  },
  dropdown: {
    color: "black",
  },
  inline: {
    display: "inline",
    marginRight: 20,
  },
}));

export default function Header() {
  const [count, setCount] = React.useState(0);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const cart = useRecoilValue(cartState);

  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };
  const handleMenuItemSignIn = () => {
    history.push("/login");
  };
  const handleMenuItemSignUp = () => {
    history.push("/signup");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleViewCart = () => {
    history.push("/cart");
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={() => handleMenuItemSignUp()}>Sign Up </MenuItem>
      <MenuItem onClick={() => handleMenuItemSignIn()}>Sign In </MenuItem>
    </Menu>
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            TOAN_PUI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.menubar}>
            <div>
              <ul navbar navbar-expand-lg navbar-dark default-color>
                <li className={classes.inline}>
                  <Dropdown
                    title="SẢN PHẨM"
                    buttonClassName={classes.dropdownButton}
                    position="right"
                  >
                    <Dropdown.Item className={classes.dropdown}>
                      SALE OFF 50%
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      ÁO
                      <Dropdown.Submenu position="right">
                        <Dropdown.Item>ÁO SƠ MI</Dropdown.Item>
                        <Dropdown.Item>ÁO POLO</Dropdown.Item>
                        <Dropdown.Item>ÁO THUN</Dropdown.Item>
                        <Dropdown.Item>ÁO VEST</Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      QUẦN
                      <Dropdown.Submenu position="right">
                        <Dropdown.Item>QUẦN JEANS</Dropdown.Item>
                        <Dropdown.Item>QUẦN BÒ</Dropdown.Item>
                        <Dropdown.Item>QUẦN JOGGER</Dropdown.Item>
                        <Dropdown.Item>QUẦN SHORT</Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      GIÀY DÉP
                    </Dropdown.Item>
                  </Dropdown>
                </li>
                <li className={classes.inline}>
                  <Dropdown
                    title="SP MÙA ĐÔNG"
                    buttonClassName={classes.dropdownButton}
                    position="right"
                  >
                    <Dropdown.Item className={classes.dropdown}>
                      ÁO KHOÁC
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      ÁO KHOÁC BÒ
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      ÁO NỈ-SWEATSHIRT
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      ÁO LEN
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      ÁO HOODIE
                    </Dropdown.Item>
                  </Dropdown>
                </li>
                <li className={classes.inline}>
                  <Dropdown
                    title="SALE UP TO 50%"
                    buttonClassName={classes.dropdownButton}
                    position="right"
                  ></Dropdown>
                </li>
                <li className={classes.inline}>
                  <Dropdown
                    title="H.DẪN-C.SÁCH"
                    buttonClassName={classes.dropdownButton}
                    position="right"
                  >
                    <Dropdown.Item
                      onClick={() => console.log("!11")}
                      className={classes.dropdown}
                    >
                      CS ĐỔI TRẢ
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      TK NGÂN HÀNG
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.dropdown}>
                      KT ĐƠN HÀNG
                    </Dropdown.Item>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleViewCart}
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
}
