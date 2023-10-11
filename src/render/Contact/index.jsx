import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ContactForm } from "../../components/ContactForm";
export function Contact() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <ContactForm />
      </Box>
    </ChakraProvider>
  );
}
