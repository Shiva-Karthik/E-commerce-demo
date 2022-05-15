import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
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
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsData } from "../../redux/products/action";
import { ProductCard } from "../Cards/ProductCard";
import { ProductGrid } from "../Cards/ProductGrid";

const Electronics = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [filterState, setFilterState] = useState({ parameter: "", value: "" });
  const handleSort = (parameter, value) => {
    setFilterState({ parameter: parameter, value: value });
  };

  const getData = () => {
    dispatch(getProductsData());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {/* <Heading>Top Picks</Heading> */}
      <Box p={10}>

      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          Sort by
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Price" type="radio">
            <MenuItemOption
              value="asc"
              onClick={() => {
                handleSort("price", 1);
              }}
            >
              Ascending
            </MenuItemOption>
            <MenuItemOption
              value="desc"
              onClick={() => {
                handleSort("price", -1);
              }}
            >
              Descending
            </MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup defaultValue="asc" title="Name" type="radio">
            <MenuItemOption
              value="asc"
              onClick={() => {
                handleSort("name", 1);
              }}
            >
              Ascending
            </MenuItemOption>
            <MenuItemOption
              value="desc"
              onClick={() => {
                handleSort("name", -1);
              }}
            >
              Descending
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      </Box>
      

      <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <ProductGrid>
    {products.length &&
          products
            .sort((a, b) => {
              if (filterState.parameter === "name" && filterState.value === 1) {
                return a["name"].localeCompare(b["name"]);
              } else if (
                filterState.parameter === "name" &&
                filterState.value === -1
              ) {
                return b["name"].localeCompare(a["name"]);
              } else if (
                filterState.parameter === "price" &&
                filterState.value === 1
              ) {
                return a["price"] - b["price"];
              } else if (
                filterState.parameter === "price" &&
                filterState.value === -1
              ) {
                return b["price"] - a["price"];
              }
            })
            
            .map((e, i) => {
              return (

                  <ProductCard
                    key={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    id={e.id}
                    e={e}
                  />
              );
            })}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </ProductGrid>
  </Box>
      
        
    </Box>
  );
};

export default Electronics;
