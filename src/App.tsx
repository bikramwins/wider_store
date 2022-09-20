import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routesPath";
import Products from "./components/products";
import Orders from "./components/orders";

function App() {
  return (
    <Container>
      <Sidebar />
      <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<Dashboard />} />
        <Route path={ROUTE_PATHS.PRODUCTS} element={<Products />} />
        <Route path={ROUTE_PATHS.ORDERS} element={<Orders />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
