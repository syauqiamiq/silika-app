import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rpl from "../../assets/image/rpl.png";
import Ds from "../../assets/image/ds.png";
import Game from "../../assets/image/game.png";
import Jarkom from "../../assets/image/jaringan.png";

const SectionMinatComponent = () => {
  return (
    <>
      <Container className="section-minat">
        <Row className="text-center mb-3">
          <Col>
            <h1>BIDANG MINAT</h1>
          </Col>
        </Row>
        <Row>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Card className="minat-card">
              <Card.Body className="text-center">
                <Card.Title className="card-minat-title">Data Science</Card.Title>
                <img className="minat-image" src={Ds} alt="" />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Card className="minat-card">
              <Card.Body className="text-center">
                <Card.Title className="card-minat-title">RPL</Card.Title>
                <img className="minat-image" src={Rpl} alt="" />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Card className="minat-card">
              <Card.Body className="text-center">
                <Card.Title className="card-minat-title">Game Cerdas</Card.Title>
                <img className="minat-image" src={Game} alt="" />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Card className="minat-card">
              <Card.Body className="text-center">
                <Card.Title className="card-minat-title">Jaringan Komputer</Card.Title>
                <img className="minat-image" src={Jarkom} alt="" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SectionMinatComponent;
