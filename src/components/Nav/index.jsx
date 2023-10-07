import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCart";
import { teal } from "@mui/material/colors";

export function Nav() {
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
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}
