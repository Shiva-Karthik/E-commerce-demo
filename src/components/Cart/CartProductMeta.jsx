import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FiGift } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const CartProductMeta = (props) => {
  const navigate = useNavigate();
  const { isGiftWrapping = true, image, name, description, id } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        onClick={() => navigate(`/category/electronics/${id}`)}
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
        cursor="pointer"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {description}
          </Text>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  );
};
