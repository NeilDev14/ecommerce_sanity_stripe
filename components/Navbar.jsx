import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "red",
    },
  }));

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">N&M Computers</Link>
      </p>

      {/* <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      > */}
      <IconButton
        className="cart-icon"
        onClick={() => setShowCart(true)}
        aria-label="cart"
        style={{ color: "white" }}
      >
        <StyledBadge badgeContent={totalQuantities} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      {/* </button> */}

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
