import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProductsData } from "../../redux/products/action";
import { ProductCard } from "../Cards/ProductCard";
import { Heading } from '@chakra-ui/react'
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
  Select,
} from "@chakra-ui/react";


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const LandingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [filterState, setFilterState] = useState({ parameter: "", value: "" });
  const [query, setQuery] = useState("");
  const [slider, setSlider] = useState(React.useState < Slider);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards = [
    "https://m.media-amazon.com/images/I/61gK+CJQnjL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61od7gDIFEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61xeNFULzML._SX3000_.jpg"
  ];
  console.log("lp", products);

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
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
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
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"6xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Box>
      <Heading>Top Picks</Heading>
      
          {/* <Input
            id="myInput"
            // onChange={(e) => tyPing(e)}
            placeholder="Filter by Name"
            htmlSize={10}
            width="auto"
            onChange={(e) => setQuery(e.target.value)}
          /> */}
        <Grid templateColumns="repeat(3, 1fr)">
          {products.length && products.map((e, i) => {
            return (
              <GridItem>
                <ProductCard
                  key={e.id}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingPage;
