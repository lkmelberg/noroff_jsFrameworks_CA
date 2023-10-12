import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
} from "@chakra-ui/react";
import {
  useCart,
  saveCartStateToLocalStorage,
} from "../../context/CartContext";
import { FetchProduct } from "../../api/FetchProduct";

export function ProductDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  const { dispatch, cartState } = useCart();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const productData = await FetchProduct(id);
        setData(productData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: data });

    // Get the current cart state
    const updatedCart = {
      ...cartState,
      cartItems: [...cartState.cartItems, data],
    };

    // Save the updated cart state to localStorage
    saveCartStateToLocalStorage(updatedCart);
  };

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  const {
    title,
    description,
    price,
    discountedPrice,
    imageUrl,
    tags,
    reviews,
  } = data;

  function Discount() {
    const calcDiscount = (price, discountedPrice) => {
      const difference = price - discountedPrice;
      const percentage = (difference / price) * 100;
      return percentage.toFixed();
    };
    const discount = calcDiscount(price, discountedPrice);

    if (discountedPrice < price) {
      return (
        <Text
          className="discount"
          color={("gray.900", "gray.400")}
          fontWeight={300}
          fontSize={"2xl"}>
          {discount} % off
        </Text>
      );
    }
  }
  Discount();

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={imageUrl}
            fit={"cover"}
            align={"center"}
            w={"70%"}
            h={{ base: "70%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {title}
              <Discount></Discount>
            </Heading>
            <Text
              color={("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}>
              {discountedPrice} NOK
            </Text>
            <Text
              color={("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}></Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={("gray.200", "gray.600")} />}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{description}</Text>
            </VStack>
            tags
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={("pink.500", "pink.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}>
                Product Tags:
              </Text>
              <Text fontSize={"lg"}>
                {tags.map((tag, index) => (
                  <>
                    <Text
                      key={index}
                      fontSize={{ base: "12px", lg: "14px" }}
                      as={"li"}
                      fontWeight={"light"}>
                      {tag}
                    </Text>
                  </>
                ))}
              </Text>
            </Box>
            <Flex justifyContent="space-around">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={handleAddToCart}>
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}>
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Flex>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={("pink.500", "pink.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}>
                Product Reviews:
              </Text>
              <Text fontSize={"lg"}>
                {reviews.map((reviews, index) => (
                  <>
                    <Text key={index} as={"span"} fontWeight={"bold"}>
                      {reviews.username}
                    </Text>
                    <span fontWeight={"light"}> {reviews.description}</span>
                    <span fontWeight={"ultraLight"}> {reviews.rating}/5</span>
                    <br />
                  </>
                ))}
              </Text>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
