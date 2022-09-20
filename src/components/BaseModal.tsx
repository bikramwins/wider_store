import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { colors } from "../utils";
import AddNewProduct from "./products/AddNewProduct";
import CreateOrder from "./orders/CreateOrder";
import ConfirmModal from "./ConfirmModal";
import ProductDetails from "./products/ProductDetails";
import OrderDetails from "./orders/OrderDetails";

export const ModalList = Object.freeze({
  AddNewProduct: "AddNewProduct",
  EditProduct: "EditProduct",
  ViewProduct: "ViewProduct",
  CreateOrder: "CreateOrder",
  ConfirmModal: "ConfirmModal",
  OrderDetails: "OrderDetails",
  DeleteProductModal: "DeleteProductModal",
  DeleteOrderModal:"DeleteOrderModal"
});

const Background = styled.div<any>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div<any>`
  width: auto;
  min-width: 400px;
  height: auto;
  max-height: 500px;
  overflow-y: scroll;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.grey1};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${colors.grey6};
  z-index: 100;
  background: #fff;
  height: 30px;
  position: sticky;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const RenderModal = ({ modalType, title, close, ...rest }: any) => {
  return (
    <>
      {(() => {
        switch (modalType) {
          case ModalList.AddNewProduct:
            return <AddNewProduct close={close} />;
          case ModalList.CreateOrder:
            return <CreateOrder {...rest} close={close} />;
          case ModalList.EditProduct:
            return <AddNewProduct {...rest} close={close} />;
          case ModalList.ViewProduct:
            return <ProductDetails {...rest} close={close} />;
          case ModalList.OrderDetails:
            return <OrderDetails {...rest} close={close} />;
          case ModalList.DeleteProductModal:
            return <ConfirmModal {...rest} close={close} />;
          case ModalList.DeleteOrderModal:
            return <ConfirmModal {...rest} close={close} />;

          default:
            return null;
        }
      })()}
    </>
  );
};

export const Modal = ({
  open,
  modalType,
  setShowModal,
  title,
  ...rest
}: any) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: open ? 1 : 0,
    transform: open ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: any) => {
    if (modalRef.current === e?.target) {
    }
  };

  const close = () => {
    setShowModal(false);
  };

  const keyPress = useCallback(
    (e: any) => {
      if (e.key === "Escape" && open) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, open]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {open ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={open}>
              <Header>
                <Title>{title}</Title>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev: any) => !prev)}
                />
              </Header>
              <ModalContent>
                <RenderModal close={close} modalType={modalType} {...rest} />
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
