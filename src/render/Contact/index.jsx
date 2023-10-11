import React from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { ContactForm } from "../../components/ContactForm";
import { MyTheme } from "../../theme";
export function Contact() {
  return (
    <ChakraProvider theme={MyTheme}>
      <Flex justifyContent={"center"}>
        <Box width={"20rem"} p={6}>
          <ContactForm />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
