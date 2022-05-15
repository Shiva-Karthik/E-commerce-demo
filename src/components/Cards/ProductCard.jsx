import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { Rating } from "./Rating";
import { PriceTag } from "./PriceTag";
import { useDispatch } from "react-redux";
import { addDataToCart } from "../../redux/cart/action";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { name, image, price, e, rating } = props;
  const dispatch = useDispatch();
  const addCart = (el) => {
    dispatch(addDataToCart(el));
  };
  return (
    <Stack
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
      // {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Link onClick={() => navigate(`/category/electronics/${e.id}`)}>
            <Image
              src={image}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: "md",
                md: "xl",
              })}
            />
          </Link>
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} currency="INR" />
        </Stack>
        <HStack>
          <Rating
            rating={Math.floor(Math.random() * (5 - 2) + 2)}
            numReviews={Math.floor(Math.random() * (250 - 50) + 50)}
          />
        </HStack>
      </Stack>
      <Stack align="center">
        <Button
          colorScheme="blue"
          isFullWidth
          onClick={() => {
            addCart(e);
            toast({
              title: "Item added to cart",
              status: "success",
              isClosable: true,
            });
          }}
        >
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
          onClick={() => {
            navigate("/checkout");
            addCart(e);
          }}
        >
          Quick shop
        </Link>
      </Stack>
    </Stack>
  );
};
