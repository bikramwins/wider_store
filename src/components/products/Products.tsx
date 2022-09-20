import React from "react";
import styled from "styled-components";
import AvatarImage from "../../assets/avatarImage2.jpg";
import AvatarImage2 from "../../assets/avatarImage3.jpg";
import { useAppSelector } from "../../redux/store";
import { cardShadow, hoverEffect, colors } from "../../utils";

function Products() {
  const products = useAppSelector((state) => state.productState.products);

  const filteredProducts = products.filter((product, index) => index < 2);

  return (
    <YourProducts>
      {filteredProducts.map((product: any) => (
        <Product key={product.id}>
          <Avatar>
            <img src={product?.imageUrl || AvatarImage} alt="" />
          </Avatar>
          <Detail>
            <Title>{product.name}</Title>
            <TitleWrapper>
              <SubTitle>${product.price}</SubTitle>
              <SubTitle>-</SubTitle>
              <SubTitle>{product.sku}</SubTitle>
            </TitleWrapper>
          </Detail>
        </Product>
      ))}

      <AllProducts>See all products</AllProducts>
    </YourProducts>
  );
}

const YourProducts = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
  width: 100%;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`;

const AllProducts = styled.h5`
  text-align: end;
  color: ${colors.themeColor};
  cursor: pointer;
`;

export default Products;
