import { Box, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

import { SlideItem } from "./SlideItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slide() {
  return (
    <Box>
      <Swiper pagination navigation loop modules={[Pagination, Navigation]}>
        <SwiperSlide>
          <SlideItem
            continentName="América"
            continentText="Conhecida por suas cidades e atrações turísticas."
            href="america"
            imageUrl="/assets/north-america.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            continentName="Europa"
            continentText="O continente mais antigo"
            href="europa"
            imageUrl="/assets/europe.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            continentName="Ásia"
            continentText="Algumas das mais antigas civilizações do mundo"
            href="asia"
            imageUrl="/assets/asia.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            continentName="África"
            continentText="O berço da humanidade."
            href="africa"
            imageUrl="/assets/africa.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            continentName="Oceania"
            continentText="Tradições e culturas únicas e diversificadas."
            href="oceania"
            imageUrl="/assets/oceania.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
