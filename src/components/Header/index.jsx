import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Nav";
import { Image } from "@chakra-ui/react";
import Wideselection from "../../WideSelection.svg";

export function Header() {
  return (
    <header>
      <Link to="/">
        <Image
          width={150}
          height={50}
          src={Wideselection}
          alt="Logo for website WodeSelection"
        />
      </Link>
      <Nav />
    </header>
  );
}
