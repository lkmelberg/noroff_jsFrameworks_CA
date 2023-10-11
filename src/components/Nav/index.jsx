import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCart";
import { teal } from "@mui/material/colors";
import { useCart } from "../../context/CartContext";

export function Nav() {
  const { cartState } = useCart();
  const numberOfItemsInCart = cartState.cartItems.length;

  return (
    <Tabs border={(5, "black")} variant="enclosed">
      <TabList borderBottom={"transparent"}>
        <Tab borderBottom={"transparent"}>
          <Link to="/">Products</Link>
        </Tab>
        <Tab borderBottom={"transparent"}>
          <Link to="/Contact">Contact</Link>
        </Tab>
        <Tab borderBottom={"transparent"}>
          <Link to="/Cart">
            <ShoppingCartSharpIcon color="Secondary" />
            {numberOfItemsInCart > 0 && (
              <span style={{ color: teal[500], marginLeft: "0.5rem" }}>
                {numberOfItemsInCart}
              </span>
            )}
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}
