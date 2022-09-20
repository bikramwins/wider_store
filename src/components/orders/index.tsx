import { useSelector } from "react-redux";
import styled from "styled-components";
import { NoData } from "../NoData";
import { ACTION_ICONS, IconContainer, Table, TableWrapper } from "../table";
import { useState } from "react";
import { Button } from "../orders/PlaceOrder";
import { Modal, ModalList } from "../BaseModal";
import { useAppDispatch } from "../../redux/store";
import { deleteOrder } from "./orderSlice";

const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <Modal
        open={openModal}
        modalType={ModalList.CreateOrder}
        setShowModal={setOpenModal}
        title="Create Order"
      />
      <Button onClick={() => setOpenModal(!openModal)}>Create Order</Button>
    </Container>
  );
};
function Orders() {
  const dispatch = useAppDispatch();
  const { orders = [] } = useSelector((state: any) => state?.orderState);
  const [orderId, setOrderId] = useState("");
  const [openViewModal, setOpenViewModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  // const editHandler = () => {};
  const viewHandler = (id: any) => {
    setOrderId(id);
    setOpenViewModal(true);
  };
  const deleteHandler = (id: any) => {
    setProductId(id);
    setOpenDeleteModal(true);
  };
  return (
    <>
      <TableWrapper>
        <TopBar />
        <Table>
          <Table.Head>
            <Table.TR>
              <Table.TH>Order ID</Table.TH>
              <Table.TH>Customer Name</Table.TH>
              <Table.TH>Customer Phone</Table.TH>
              <Table.TH>Order Amount</Table.TH>
              <Table.TH>Status</Table.TH>
              <Table.TH>Action</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            {orders?.map((order: any) => {
              return (
                <Table.TR key={order.id}>
                  <Table.TD>{order.id}</Table.TD>
                  <Table.TD>{order.customerName}</Table.TD>
                  <Table.TD>{order.customerPhone}</Table.TD>
                  <Table.TD>${order.amount}</Table.TD>
                  <Table.TD>Paid</Table.TD>
                  <Table.TD>
                    <IconContainer onClick={() => viewHandler(order.id)}>
                      {ACTION_ICONS.VIEW}
                    </IconContainer>
                    <IconContainer
                      fillColor="red"
                      onClick={() => deleteHandler(order.id)}
                    >
                      {ACTION_ICONS.DELETE}
                    </IconContainer>
                  </Table.TD>
                </Table.TR>
              );
            })}
          </Table.Body>
        </Table>
        {orders.length === 0 && <NoData message="Currently No Orders !!" />}
      </TableWrapper>
      <Modal
        open={openViewModal}
        modalType={ModalList.OrderDetails}
        setShowModal={setOpenViewModal}
        orderId={orderId}
        title="Order Details"
      />
      <Modal
        open={openDeleteModal}
        modalType={ModalList.DeleteOrderModal}
        setShowModal={setOpenDeleteModal}
        onConfirm={() => {
          dispatch(deleteOrder(productId));
          setOpenDeleteModal(false);
        }}
        header={`Are you sure you want to delete the order`}
      />
    </>
  );
}
export default Orders;

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
  margin-bottom: 20px;
`;
