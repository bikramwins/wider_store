import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils";
import Input from "../Input";
import Select from "react-select";
import { useSelector } from "react-redux";

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

const OrderDetails = ({
  orderId,
}: {
  close: Function;
  orderId?: any;
}) => {
  const selectInputRef: any = useRef();
  const { products = [] } = useSelector((state: any) => state.productState);
  const orders = useSelector((state: any) => state.orderState.orders);
  const [orderProducts, setOrderProducts] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [orderTotal, setOrderTotal] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const options = products.map((item: any) => {
    return {
      ...item,
      value: item.id,
      label: item.name,
    };
  });

  useEffect(() => {
    updateOrderTotal();
  }, [orderProducts]); // eslint-disable-line

  const addMoreProducts = () => {
    if (selectedItem) {
      setOrderProducts((prevItems: any) => [...prevItems, selectedItem]);
      selectInputRef?.current?.select?.clearValue();
      setSelectedItem(null);
    }
  };

  const removeItem = (item: any) => {
    setOrderProducts(orderProducts.filter((p: any) => p.id === item.item.id));
  };

  const updateOrderTotal = () => {
    let totalOfOrder = orderProducts?.reduce(
      (acc: any, item: any): any => acc + item.total,
      0
    );
    setOrderTotal(totalOfOrder);
  };

  useEffect(() => {
    if (orderId && orders) {
      const currentOrder = orders?.find((order: any) => order.id === orderId);
      setOrderProducts(
        currentOrder.products.map((product: any) => {
          return {
            item: product,
            value: product.id,
            label: product.name,
            quantity: product.quantity,
            total: product.total,
          };
        })
      );
      setOrderTotal(currentOrder.amount);
      setCustomerName(currentOrder.customerName);
      setCustomerPhone(currentOrder.customerPhone);
    }
  }, [orderId]); // eslint-disable-line

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ margin: "10px 0" }}>
        <Input
          readOnly
          placeholder="Customer Name"
          name="customerName"
          value={customerName}
          width="300px"
          margin="30px 0 0 0"
          onChange={(e: any) => {
            setCustomerName(e.target.value);
          }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <Input
          readOnly
          placeholder="Customer Phone No"
          name="customerPhoneNo"
          value={customerPhone}
          width="300px"
          margin="30px 0 0 0"
          onChange={(e: any) => {
            setCustomerPhone(e.target.value);
          }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <Select
          options={options}
          value={selectedItem?.item?.value}
          ref={selectInputRef}
          placeholder="Select Product"
          onChange={(selected: any) => {
            setSelectedItem((prevItem: any) => ({
              ...prevItem,
              item: selected,
              quantity: 1,
              total: selected.price,
            }));
          }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <Input
          readOnly
          placeholder="Quantity"
          name="quantity"
          value={selectedItem?.quantity}
          width="300px"
          margin="30px 0 0 0"
          onChange={(e: { target: { value: any } }) => {
            if (isNaN(e.target.value)) {
              return;
            }
            const qty = Number(e.target.value);
            setSelectedItem((prevItem: any) => ({
              ...prevItem,
              total: prevItem?.item?.price * qty,
              quantity: qty,
            }));
          }}
        />
      </div>
      <button
        style={{ background: "#162349" }}
        type="button"
        onClick={() => addMoreProducts()}
      >
        + Add More
      </button>
      <Ol>
        {orderProducts?.map((product: any) => {
          return (
            <LI key={product?.item?.id}>
              {product?.item?.name} (Qty : {product.quantity}) - $
              {product.total}
              <RemoveButton type="button" onClick={() => removeItem(product)}>
                X
              </RemoveButton>
            </LI>
          );
        })}
      </Ol>
      <div
        style={{
          padding: "20px 0 40px 0",
          position: "sticky",
          bottom: "0",
          left: "0",
          background: "white",
        }}
      >
        {orderProducts?.length > 0 && (
          <TotalContainer>Order Total ${orderTotal}</TotalContainer>
        )}
      </div>
    </form>
  );
};

const Ol = styled.ol`
  padding: 10px;
`;

const LI = styled.li`
  padding: 5px;
  font-size: 12px;
`;
const TotalContainer = styled.div`
  padding: 5px;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background: none;
  color: red !important;
  cursor: pointer !important;
`;

export default OrderDetails;
