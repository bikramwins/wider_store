import styled from "styled-components";
import Badge from "../Badge";
import AvatarImage2 from "../../assets/avatarImage2.jpg";
import { cardShadow, hoverEffect } from "../../utils";
import { useAppSelector } from "../../redux/store";

function Orders() {
  const orders = useAppSelector((state) => state.orderState.orders);
  const filteredOrders: any = orders.filter((order:any, index:number) => index < 2);
  const firstItem = filteredOrders.product?.find(
    (product: any, index: number) => index === 0
  );

  return (
    <OrdersContainer>
      <CardContent>
        {filteredOrders.map((order: any) => (
          <Order>
            <Info>
              <Avatar>
                <img src={firstItem?.imageUrl || AvatarImage2} alt="" />
              </Avatar>
              <TextContainer>
                <Title>{order.customerName}</Title>
                <SubTitle>{order.customerPhone}</SubTitle>
              </TextContainer>
            </Info>
            <Container>
              <Badge content="Paid" paid  glow/>
              <Price>${order.amount}</Price>
            </Container>
          </Order>
        ))}
      </CardContent>
    </OrdersContainer>
  );
}

const OrdersContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default Orders;
