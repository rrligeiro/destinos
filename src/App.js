import CarouselComp from "./components/CarouselComp";
import NavbarComp from "./components/NavbarComp";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormComp from "./components/FormComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <>
      <NavbarComp />
      <Container>
        <Row className="row-content">
          <Col>
            <CarouselComp />
          </Col>
        </Row>
        <Row className="row-content">
          <Col>
            <FormComp />
          </Col>
        </Row>
      </Container>
      <FooterComp />
    </>
  );
}

export default App;
