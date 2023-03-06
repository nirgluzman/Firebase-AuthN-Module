import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
