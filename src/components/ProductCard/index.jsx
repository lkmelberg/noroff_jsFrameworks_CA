import React from "react";
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
  Link,
  Stack,
} from "@chakra-ui/react";

export function ProductCard(product) {
  const { description, discountedPrice, id, imageUrl, title } = product;
  return (
    <Card maxW="sm">
      <Divider />
      <CardBody>
        <Image
          src={imageUrl}
          alt="Product image of {title}"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {discountedPrice}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/product/${id}`}>View Product</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
