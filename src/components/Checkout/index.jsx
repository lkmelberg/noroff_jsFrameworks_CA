import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
} from "@chakra-ui/react";

export function Checkout() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}>
            Checkout
            <br />
            <Text as={"span"} color={"green.400"}>
              Successful!{" "}
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Sit tight and you will get an email with your invoice and shipping
            details. Happy Shopping!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}>
            <Button
              as={Link}
              to="/"
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}>
              Back to Products
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
