import {
  Button,
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import {
  deleteDataToCart,
  updateToCart,
} from "../../redux/cart/action";
import { useParams } from "react-router-dom";

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const { _id, onChangeQuantity,currency, qty } = props;


  const onClickDelete = (_id) => {
    dispatch(deleteDataToCart(_id));
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={props.product_id.name} image={props.product_id.image} id={props.product_id._id} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          value={qty}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
            dispatch(updateToCart(_id, +e.currentTarget.value));
          }}
        />
        <PriceTag price={props.product_id.price} />
        <CloseButton
          aria-label={`Delete ${props.product_id.name} from cart`}
          onClick={() => onClickDelete(_id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Button onClick={() => onClickDelete(_id)}>Remove</Button>
        <QuantitySelect
          value={qty}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
            dispatch(updateToCart(_id, +e.currentTarget.value));
          }}
        />
        <PriceTag price={props.product_id.price} currency={currency} />
      </Flex>
    </Flex>
  );
};
