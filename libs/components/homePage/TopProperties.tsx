import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopPropertyCard from "./TopPropertiesCard";

const TopProperties = ({ initialInput, ...props }: any) => {
  const [topProperties, setTopProperties] = useState<number[]>(initialInput);

  return (
    <Stack className={"top-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Properties</span>
            <p>Top properties based on likes</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon className={"swiper-trend-prev"} />
              <div className={"swiper-trend-pagination"}></div>
              <EastIcon className={"swiper-trend-next"} />
            </div>
          </Box>
        </Stack>

        <Stack className={"card-box"}>
          {topProperties.length === 0 ? (
            <Box className="empty-list">Top properties empty</Box>
          ) : (
            <Swiper
              className={"top-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
              }}
            >
              {topProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className="top-property-slide">
                    <TopPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

TopProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default TopProperties;
