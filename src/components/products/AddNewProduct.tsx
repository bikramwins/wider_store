import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { colors } from "../../utils";
import Input, { MoneyInput, TextAreaInput } from "../Input";
import { addNewProduct, editProduct } from "../products/productSlice";

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

const StickyBottomContainer = styled.div`
  padding: 20px 0 40px 0;
  position: sticky;
  bottom: 0;
  left: 0;
  background: white;
`;

const InputContainer = styled.div`
  margin: 20px 0;
`;

const INITIAL_PRODUCT = {
  name: "",
  sku: "",
  price: null,
  description: "",
  imageUrl: "",
};

const AddNewProduct = ({
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
  }, [productId]);

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
          name="description"
          value={productDetails.description}
          width="300px"
          margin="30px 0 0 0"
          placeholder="description"
          onChange={onChangeHandler}
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="imageUrl"
          value={productDetails.imageUrl}
          required
          width="300px"
          margin="30px 0 0 0"
          placeholder="Image Url"
          onChange={onChangeHandler}
        />
      </InputContainer>

      <StickyBottomContainer>
        <Button type="submit">
          {productId ? "Save Details" : "Add New Product"}
        </Button>
      </StickyBottomContainer>
    </Form>
  );
};

export default AddNewProduct;
