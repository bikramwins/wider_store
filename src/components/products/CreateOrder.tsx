import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../redux/store";
import { colors } from "../../utils";
import Input, { MoneyInput, TextAreaInput } from "../Input";
import { addNewProduct } from "./productSlice";
import { useNavigate } from "react-router-dom";
export const Button = styled.button`
  background: ${colors.themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`;

const INITIAL_ORDER = {
  name: "",
  sku: "",
  price: null,
  description: "",
  imageUrl: "",
};

const CreateOrder = ({ close }: { close: Function }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(INITIAL_ORDER);

  const onChangeHandler = (event: any) => {
    const { value, name } = event.target;
    setOrderDetails((old) => ({ ...old, [name]: value }));
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(addNewProduct(orderDetails));
    // navigate("/products");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ margin: "20px 0" }}>
        <Input
          required
          placeholder="Product Name"
          name="name"
          value={orderDetails.name}
          width="300px"
          margin="30px 0 0 0"
          onChange={onChangeHandler}
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <Input
          name="sku"
          value={orderDetails.sku}
          required
          width="300px"
          margin="30px 0 0 0"
          placeholder="SKU"
          onChange={onChangeHandler}
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <MoneyInput
          name="price"
          value={orderDetails.price}
          required
          width="275px"
          margin="30px 0 0 0"
          placeholder="Price"
          onChange={onChangeHandler}
          type="number"
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <TextAreaInput
          required
          name="description"
          value={orderDetails.description}
          width="300px"
          margin="30px 0 0 0"
          placeholder="description"
          onChange={onChangeHandler}
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <Input
          name="imageUrl"
          value={orderDetails.imageUrl}
          required
          width="300px"
          margin="30px 0 0 0"
          placeholder="Image Url"
          onChange={onChangeHandler}
        />
      </div>

      <div
        style={{
          padding: "20px 0 40px 0",
          position: "sticky",
          bottom: "0",
          left: "0",
          background: "white",
        }}
      >
        <Button type="submit">Create Order</Button>
      </div>
    </form>
  );
};

export default CreateOrder;
