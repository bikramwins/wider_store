import React, { useState } from "react";
import styled from "styled-components";
import { FaSlack } from "react-icons/fa";
import { colors, hoverEffect } from "../../utils";
import { Modal, ModalList } from "../BaseModal";
function PlaceOrder() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <PlaceOrderContainer>
      <CardContent flex={true}>
        <Order>
          <OrderLogo>
            <FaSlack />
          </OrderLogo>
          <OrderText>
            <OrderHead>Wanna place an order ?</OrderHead>
            <OrderFoot>You'll get product list into modal</OrderFoot>
          </OrderText>
        </Order>
        <Button onClick={() => setOpenModal(true)}>Place Now</Button>
      </CardContent>
      <Modal
        open={openModal}
        modalType={ModalList.CreateOrder}
        setShowModal={setOpenModal}
        title="Create Order"
      />
    </PlaceOrderContainer>
  );
}

const PlaceOrderContainer = styled.div`
  background-color: ${colors.darkThemeColor};
  height: 50%;
  margin-top: 6.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

type CardContentTypes = {
  flex?: boolean;
};

const CardContent = styled.div<CardContentTypes>`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Order = styled.div`
  display: flex;
`;

const OrderLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const OrderText = styled.div`
  color: white;
`;

const OrderHead = styled.h2`
  font-weight: 500;
`;
const OrderFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
export const Button = styled.button`
  background-color: ${colors.themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default PlaceOrder;
