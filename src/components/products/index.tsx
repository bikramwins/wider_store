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
        title="Add New Product"
      />
      <Button onClick={() => setOpenModal(!openModal)}>Add New Product</Button>
    </Container>
  );
};

function Products() {
  const { products = [] } = useSelector((state: any) => state?.productState);

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
              <Table.TH>Product ID</Table.TH>
              <Table.TH>Name</Table.TH>
              <Table.TH>SKU</Table.TH>
              <Table.TH>Price</Table.TH>
              <Table.TH>Description</Table.TH>
              <Table.TH>Action</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            {products?.map((product: any) => {
              return (
                <Table.TR key={product.id}>
                  <Table.TD>{product.id}</Table.TD>
                  <Table.TD>
                    <ImgWrapper>
                      {product?.imageUrl && <Img src={product?.imageUrl} />}
                      <Text>{product.name}</Text>
                    </ImgWrapper>
                  </Table.TD>
                  <Table.TD>{product.sku}</Table.TD>
                  <Table.TD>{product.price}</Table.TD>
                  <Table.TD>
                    <DescriptionWrapper>
                      {product.description}
                    </DescriptionWrapper>
                  </Table.TD>
                  <Table.TD>
                    <IconContainer onClick={() => editHandler()}>
                      {ACTION_ICONS.EDIT}
                    </IconContainer>
                    <IconContainer onClick={() => viewHandler()}>
                      {ACTION_ICONS.VIEW}
                    </IconContainer>
                    <IconContainer
                      fillColor="#ff0f009e"
                      onClick={() => deleteHandler()}
                    >
                      {ACTION_ICONS.DELETE}
                    </IconContainer>
                  </Table.TD>
                </Table.TR>
              );
            })}
          </Table.Body>
        </Table>
        {products.length === 0 && <NoData message="Currently No Products !!" />}
      </TableWrapper>
    </>
  );
}
export default Products;

const DescriptionWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
`;


const Text = styled.div`
  padding-left: 10px
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
