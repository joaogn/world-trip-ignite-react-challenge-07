import React from "react";
import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

interface MainImageProps {
  src: string;
}

export default ({ src }: MainImageProps) => {
  return <Image width="95%" maxWidth="720px" src={src} />;
};
