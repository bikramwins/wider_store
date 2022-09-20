import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Dashboard />
      </Container>
    </Router>
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
