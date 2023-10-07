import React from "react";
import { Nav } from "../Nav";
import { Image } from "@chakra-ui/react";
import Wideselection from "../../WideSelection.svg";

export function Header() {
  return (
    <header>
      <Image width={150} height={50} src={Wideselection} alt="Dan Abramov" />

      <Nav />
    </header>
  );
}
