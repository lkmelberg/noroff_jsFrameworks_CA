import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export function ProductCard(product) {
  const { description, discountedPrice, id, imageUrl, title } = product;
  return (
    <Card maxW="20rem" margin="1rem">
      <CardBody direction="column" justifyContent="space-around">
        <Image
          boxSize="10rem"
          src={imageUrl}
          alt="Product image of {title}"
          borderRadius="md"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{title}</Heading>
          <Text>{description}</Text>
          <Flex alignItems="flex-end" justifyContent="space-around">
            <Text color="blue.600" fontSize="2xl">
              {discountedPrice}
            </Text>
            <Button variant="outline" colorScheme="blue">
              <Link to={`/product/${id}`}>View Product</Link>
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}
