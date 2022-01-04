import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Icon1 from "../../assets/icons/FeatureCard/icon1.png";
import Icon2 from "../../assets/icons/FeatureCard/icon2.png";
import Icon3 from "../../assets/icons/FeatureCard/icon3.png";

const FeatureCardComponents = () => {
  return (
    <>
      <Container fluid className="section-card">
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className="feature-card">
              <Card.Body>
                <img className="card-icon" src={Icon1} alt="" />
                <Card.Title className="card-title">Research Center</Card.Title>
                <Card.Text className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </Card.Text>
                <Row className="justify-content-end">
                  <Button className="card-button"> View More</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className="feature-card">
              <Card.Body>
                <img className="card-icon" src={Icon2} alt="" />
                <Card.Title className="card-title">Training Center</Card.Title>
                <Card.Text className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </Card.Text>
                <Row className="justify-content-end">
                  <Button className="card-button"> View More</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className="feature-card">
              <Card.Body>
                <img className="card-icon" src={Icon3} alt="" />
                <Card.Title className="card-title">Certification Center</Card.Title>
                <Card.Text className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </Card.Text>
                <Row className="justify-content-end">
                  <Button className="card-button"> View More</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeatureCardComponents;
