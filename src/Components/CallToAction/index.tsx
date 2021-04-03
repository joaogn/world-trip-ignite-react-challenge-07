import React from "react";
import { Slider } from "./Slider";
import { Box, Heading, Divider } from "@chakra-ui/react";
import { ContentContainer } from "../ContentContainer";

interface Continent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface CallToActionProps {
  continents: Continent[];
}

export const CallToAction = ({ continents }: CallToActionProps) => {
  return (
    <ContentContainer flexDir="column">
      <Box direction="row" w="90px" mt="4rem" mb="2rem">
        <Divider color="blue" size="4rem" borderColor="blue.800" />
      </Box>

      <Heading textAlign="center" fontSize={["xl"]}>
        Vamos nessa?
        <Heading fontSize={["xl"]}>Então escolha seu continente</Heading>
      </Heading>
      <Slider continents={continents} />
    </ContentContainer>
  );
};
