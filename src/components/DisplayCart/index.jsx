// Cart.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import {
  Text,
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  Button,
  Image,
} from "@chakra-ui/react";

export function DisplayCart() {
  const { cartState, dispatch } = useCart();

  const numberOfItemsInCart = cartState.cartItems.length;

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const removeAllFromCart = () => {
    localStorage.clear();
  };

  // useEffect(() => {
  //   const loadCartStateFromLocalStorage = () => {
  //     const storedState = JSON.parse(localStorage.getItem("cartState")) || {
  //       cartItems: [],
  //     };
  //     dispatch({
  //       type: "LOAD_CART_STATE_FROM_STORAGE",
  //       payload: storedState,
  //     });
  //   };
  //   loadCartStateFromLocalStorage();
  // }, []);

  useEffect(() => {
    const loadCartStateFromLocalStorage = () => {
      const storedState = JSON.parse(localStorage.getItem("cartState")) || {
        cartItems: [],
      };
      dispatch({
        type: "LOAD_CART_STATE_FROM_STORAGE",
        payload: storedState,
      });
    };
    loadCartStateFromLocalStorage();
  }, [dispatch]);

  useEffect(() => {
    const saveCartStateToLocalStorage = (state) => {
      localStorage.setItem("cartState", JSON.stringify(state));
    };
    saveCartStateToLocalStorage(cartState);
  }, [cartState]);

  const calculateTotalPriceOfItems = () => {
    return cartState.cartItems.reduce(
      (total, item) => total + item.discountedPrice,
      0
    );
  };

  const totalPriceOfItems = calculateTotalPriceOfItems().toFixed(2);

  if (numberOfItemsInCart <= 0) {
    return (
      <div>
        <h1>No items in cart</h1>
      </div>
    );
  }
  return (
    <div>
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}>
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart Items {numberOfItemsInCart}
            </Heading>

            <Stack spacing="6">
              {cartState.cartItems.map((item) => (
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  key={item.id}>
                  <Image
                    rounded={"md"}
                    alt={"product image"}
                    src={item.imageUrl}
                    fit={"cover"}
                    align={"center"}
                    w={"4rem"}
                    h={"4rem"}
                  />
                  {item.title} <span> {item.discountedPrice} NOK</span>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </Flex>
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <Stack
              spacing="8"
              borderWidth="1px"
              rounded="lg"
              padding="8"
              width="full">
              <Heading size="md">Order Summary</Heading>

              <Stack spacing="6">
                <Flex justify="space-between">
                  <Text fontSize="lg" fontWeight="semibold">
                    Total
                  </Text>
                  <Text fontSize="xl" fontWeight="extrabold">
                    {totalPriceOfItems} NOK
                  </Text>
                </Flex>
              </Stack>

              <Button
                as={Link}
                to="/CheckoutSuccess"
                onClick={() => {
                  removeAllFromCart();
                  window.location.reload(true);
                  window.location.href = "/CheckoutSuccess";
                }}
                colorScheme="blue"
                size="lg"
                fontSize="md">
                Checkout
              </Button>
            </Stack>
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/" color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
}
