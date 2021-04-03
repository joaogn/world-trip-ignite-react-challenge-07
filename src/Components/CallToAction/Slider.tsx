import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";
import { Box } from "@chakra-ui/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Navigation, Pagination]);

interface Continent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface SliderProps {
  continents: Continent[];
}

export const Slider = ({ continents }: SliderProps) => {
  return (
    <Box width="100%" h="450px" mt="4rem" mb="2rem">
      <Swiper slidesPerView={1} navigation pagination>
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <SliderItem
              backgroundImageSrc={continent.callImage}
              title={continent.name}
              subtitle={continent.call}
              href={`/${continent.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
