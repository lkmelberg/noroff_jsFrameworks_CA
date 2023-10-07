import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCart";

export function Nav() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>
          <Link to="/">Products</Link>
        </Tab>
        <Tab>
          <Link to="/Contact">Contact</Link>
        </Tab>
        <Tab>
          <Link to="/Cart">
            <ShoppingCartSharpIcon color="Secondary" />
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}
