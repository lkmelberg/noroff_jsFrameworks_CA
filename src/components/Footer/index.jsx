import React from "react";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Wideselection from "../../WideSelection.svg";

export function Footer() {
  return (
    <Container
      colorScheme="coral"
      as="footer"
      role="contentinfo"
      py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Image
            width={150}
            height={50}
            src={Wideselection}
            alt="Logo for website WodeSelection"
          />
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} WideSelection, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  );
}
