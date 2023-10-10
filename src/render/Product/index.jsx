import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import {
  Box,
  chakra,
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
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";

import { API_BASE_URL } from "../../api";

export function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${API_BASE_URL}/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  const {
    title,
    description,
    price,
    discountedPrice,
    imageUrl,
    rating,
    tags,
    reviews,
  } = data;

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
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {title}
            </Heading>
            <Text
              color={("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}>
              {discountedPrice} NOK
            </Text>
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
                {tags.map((tag) => (
                  <>
                    <Text
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
              <Button variant="solid" colorScheme="blue">
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
                {reviews.map((reviews) => (
                  <>
                    <Text as={"span"} fontWeight={"bold"}>
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
