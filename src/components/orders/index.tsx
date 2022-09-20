import { useSelector } from "react-redux";
import styled from "styled-components";
import { NoData } from "../NoData";
import { ACTION_ICONS, IconContainer, Table, TableWrapper } from "../table";
import { useState } from "react";
import { Button } from "../orders/PlaceOrder";
import { Modal, ModalList } from "../BaseModal";

const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <Modal
        open={openModal}
        modalType={ModalList.AddNewProduct}
        setShowModal={setOpenModal}
        title="Create Order"
      />
      <Button onClick={() => setOpenModal(!openModal)}>Create Order</Button>
    </Container>
  );
};
function Orders() {

  const { orders = [] } = useSelector((state: any) => state?.orderState);
  const editHandler = () => {};
  const viewHandler = () => {};
  const deleteHandler = () => {};

  return (
    <>
      <TableWrapper>
        <TopBar />
        <Table>
          <Table.Head>
            <Table.TR>
              <Table.TH>Order ID</Table.TH>
              <Table.TH>Customer Name</Table.TH>
              <Table.TH>Order Amount</Table.TH>
              <Table.TH>Discount</Table.TH>
              <Table.TH>Total Amount</Table.TH>
              <Table.TH>Action</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            {orders?.map(
              (order: {
                id: any;
                customerName: any;
                amount: any;
                discount: any;
                totalAmount: any;
              }) => {
                return (
                  <Table.TR>
                    <Table.TD>{order.id}</Table.TD>
                    <Table.TD>{order.customerName}</Table.TD>
                    <Table.TD>{order.amount}</Table.TD>
                    <Table.TD>{order.discount}</Table.TD>
                    <Table.TD>{order.totalAmount}</Table.TD>
                    <Table.TD>
                      <IconContainer onClick={() => editHandler()}>
                        {ACTION_ICONS.EDIT}
                      </IconContainer>
                      <IconContainer onClick={() => viewHandler()}>
                        {ACTION_ICONS.VIEW}
                      </IconContainer>
                      <IconContainer fillColor = "red" onClick={() => deleteHandler()}>
                        {ACTION_ICONS.DELETE}
                      </IconContainer>
                    </Table.TD>
                  </Table.TR>
                );
              }
            )}
          </Table.Body>
        </Table>
        {orders.length === 0 && <NoData message="Currently No Orders !!" />}
      </TableWrapper>
    </>
  );
}
export default Orders;

const Description = styled.span`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
`;

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
