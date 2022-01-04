import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../css/sectionAbout.css";
import SectionPhoto from "../../assets/image/section1-photo.png";

const SectionAboutComponent = () => {
  return (
    <>
      <Container fluid className="section-about">
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Row className="text-center">
              <Col>
                <img className="card-section-about" src={SectionPhoto} alt="" />
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="about-column">
            <Row className="text-center">
              <Col>
                <h2 className="title-about">ABOUT US</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="content-about">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="content-about">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
            </Row>
            <Row className="button-about-wrapper">
              <Button className="about-button"> Learn More </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SectionAboutComponent;
