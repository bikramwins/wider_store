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

const INITIAL_PRODUCT = {
  name: "",
  sku: "",
  price: null,
  description: "",
  imageUrl: "",
};

const AddNewProduct = ({ close }: { close: Function }) => {
  const dispatch = useAppDispatch();
  const [productDetails, setProductDetails] = useState(INITIAL_PRODUCT);

  const onChangeHandler = (event: any) => {
    const { value, name } = event.target;
    setProductDetails((old) => ({ ...old, [name]: value }));
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(addNewProduct(productDetails));
    close();
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
          value={productDetails.name}
          width="300px"
          margin="30px 0 0 0"
          onChange={onChangeHandler}
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <Input
          name="sku"
          value={productDetails.sku}
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
          value={productDetails.price}
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
          value={productDetails.description}
          width="300px"
          margin="30px 0 0 0"
          placeholder="description"
          onChange={onChangeHandler}
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <Input
          name="imageUrl"
          value={productDetails.imageUrl}
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
        <Button type="submit">Add New Product</Button>
      </div>
    </form>
  );
};

export default AddNewProduct;
