import {
  Box,
  Flex,
  Heading,
  HStack,
  // Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { getDataFromCart } from "../../redux/cart/action";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector((store) => store.cart)

  
  const getData = () => {
    dispatch(getDataFromCart())
  }
  useEffect(() => {
    getData();
  },[])
  
  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            {cart.length > 0 ? "Shopping Cart" : "Your Cart is empty"}
          </Heading>

          <Stack spacing="6">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            {/* <Link to={"/category/electronics"} > */}
            <Link to={"/category/electronics"} ><p style={{color: "blue.200"}}>Continue shopping</p></Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
