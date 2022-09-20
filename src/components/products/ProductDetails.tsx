import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { colors } from "../../utils";
import Input, { MoneyInput, TextAreaInput } from "../Input";
import { addNewProduct, editProduct } from "./productSlice";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const InputContainer = styled.div`
  margin: 20px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;
const Image = styled.img`
  max-width: 300px;
  display: flex;
  justify-content: center;
  max-height: 200px;
`;

const INITIAL_PRODUCT = {
  name: "",
  sku: "",
  price: null,
  description: "",
  imageUrl: "",
};

const ProductDetails = ({
  close,
  productId,
}: {
  close: Function;
  productId?: any;
}) => {
  const dispatch = useAppDispatch();
  const products: any = useAppSelector((state) => state.productState.products);
  const [productDetails, setProductDetails] = useState(INITIAL_PRODUCT);

  const onChangeHandler = (event: any) => {
    const { value, name } = event.target;
    setProductDetails((old) => ({ ...old, [name]: value }));
  };

  useEffect(() => {
    if (productId) {
      setProductDetails(
        products.find((product: any) => product.id === productId)
      );
    }
  }, [productId,products]);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (productId) {
      dispatch(editProduct({ productId, data: productDetails }));
      return close;
    }
    dispatch(addNewProduct({ id: Date.now(), ...productDetails }));
    close();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputContainer>
        <Input
          required
          header="Name"
          top
          readOnly
          placeholder="Product Name"
          name="name"
          value={productDetails.name}
          width="300px"
          margin="30px 0 0 0"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <Input
          header="SKU"
          top
          readOnly
          name="sku"
          value={productDetails.sku}
          required
          width="300px"
          margin="30px 0 0 0"
          placeholder="SKU"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <MoneyInput
          name="price"
          top
          readOnly
          header="Price"
          value={productDetails.price}
          required
          width="275px"
          margin="30px 0 0 0"
          placeholder="Price"
          onChange={onChangeHandler}
          type="number"
        />
      </InputContainer>
      <InputContainer>
        <TextAreaInput
          required
          readOnly
          name="description"
          value={productDetails.description}
          width="300px"
          margin="30px 0 0 0"
          placeholder="description"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <ImageContainer>
        <Image src={productDetails.imageUrl} />
      </ImageContainer>
    </Form>
  );
};

export default ProductDetails;
