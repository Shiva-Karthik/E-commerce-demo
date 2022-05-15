import React from "react";
import { Box, IconButton, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProductsData } from "../../redux/products/action";
import { ProductCard } from "../Cards/ProductCard";
import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Spinner,
  Center,
  Input,
  Flex,
  Container,
  Select,
  Stack,
  Text
} from "@chakra-ui/react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};



  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    "https://m.media-amazon.com/images/I/61gK+CJQnjL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61od7gDIFEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61xeNFULzML._SX3000_.jpg",
  ];

const LandingPage = () => {
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [filterState, setFilterState] = useState({ parameter: "", value: "" });
  const [query, setQuery] = useState("");
  const [slider, setSlider] = useState(React.useState < Slider);
  

  const getData = () => {
    dispatch(getProductsData());
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSort = (parameter, value) => {
    setFilterState({ parameter: parameter, value: value });
  };

  return (
    <Box>
      <Box
      position={'relative'}
      height={{sm: 200, lg: 500 }}
      // width={'full'}
      overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            // mobile
            // height={'sm'}
            // desktop
            // height={'6xl'}
            // tab
            // height={'3xl'}
            height={{ base: "xl", sm: "sm", lg: "6xl" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card})`}>
          </Box>
        ))}
      </Slider>
    </Box>
      <Box>
      {/* <SimpleGrid columns={2} spacing={10}>
          {products.length &&
            products.map((e, i) => {
              return (
                  <ProductCard
                    key={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    id={e.id}
                  />
              );
            })}
        </SimpleGrid> */}
      </Box>
    </Box>
  );
};

export default LandingPage;
