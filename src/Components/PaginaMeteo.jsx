import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Meteo from "./Meteo";
import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../App.css";
import MyFooter from "./MyFooter";

const PaginaMeteo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  return (
    <Container fluid>
      <MyNavbar />
      <main>
        <Row className="mt-5">
          <Col xs={12} md={8}>
            <Meteo city={city} />
          </Col>
        </Row>
      </main>
      <MyFooter />
    </Container>
  );
};

export default PaginaMeteo;
