import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addDataToCart, addToCart } from "../../redux/cart/action";

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export const ProductCard = ({ id, image, name, price, e }) => {
  const dispatch = useDispatch();
  const addCart = (el) => {
    console.log('el:', el)
    // dispatch(addToCart(e))
    dispatch(addDataToCart(el));
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Link to={`/category/electronics/${id}`}>
          <Image
            src={image}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            width="290px"
            height="300px"
            padding="10"
          />
        </Link>

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Button onClick={() => addCart(e)}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </Button>
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating
              rating={Math.floor(Math.random() * (5 - 2) + 2)}
              numReviews={Math.floor(Math.random() * (250 - 50) + 50)}
            />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹ {price}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
//
