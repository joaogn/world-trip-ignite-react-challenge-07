import { useState, useCallback } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { ContinentBanner } from "../Components/ContinentBanner";
import { ContinentDetail } from "../Components/ContinentDescription";
import { ContinentCities } from "../Components/ContinentCities";
import { PhotosModal } from "../Components/PhotosModal";
import Head from "next/head";
import { continents } from "../utils/continents";
import { GetStaticProps, GetStaticPaths } from "next";

interface City {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}
interface ContinentProps {
  continent: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: City[];
  };
}
interface ModalInfo {
  city: string;
  query: string;
}

export default function Continent({ continent }: ContinentProps) {
  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    city: "",
    query: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = useCallback(({ city, query }: ModalInfo) => {
    setModalInfo({ city, query });
    onOpen();
  }, []);

  return (
    <>
      <Head>
        <title>{`WorldTip | ${continent.name}`}</title>
        <meta
          name="description"
          content={`Conheça as cidades mais visitadas da ${continent.name} e prepare sua viagem`}
        ></meta>
      </Head>
      <Flex width="100%" flexDir="column" bg="gray.50" align="center">
        <Header />
        <ContinentBanner name={continent.name} image={continent.bannerImage} />
        <ContinentDetail
          about={continent.about}
          countries={continent.countries}
          languages={continent.languages}
          cities100={continent.cities100}
        />
        <ContinentCities cities={continent.cities} onClickCard={openModal} />
      </Flex>
      <PhotosModal modalInfo={modalInfo} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: continents.map((continent) => {
      return {
        params: {
          id: continent.id,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  return {
    props: {
      continent: continents.find((continent) => continent.id === id),
    },
  };
};
