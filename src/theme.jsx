import React from "react";

import { extendTheme } from "@chakra-ui/react";

export const MyTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        height: "100vh",
        bgGradient: "linear(red.100 0%, orange.100 25%, yellow.100 50%)",
        color: "black",
      },
      // styles for the `a`
      a: {
        color: "black",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});
