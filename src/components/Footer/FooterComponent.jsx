import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Google from "../../assets/image/google.png";
import Apple from "../../assets/image/apple.png";
import UMMImage from "../../assets/image/umm.png";
import FBIcon from "../../assets/icons/Footer/facebook.png";
import IGIcon from "../../assets/icons/Footer/instagram.png";
import TiktokIcon from "../../assets/icons/Footer/tiktok.png";
import TwitterIcon from "../../assets/icons/Footer/twitter.png";

const FooterComponent = () => {
  return (
    <>
      <div className="footer-bg">
        <Container>
          <Row className="px-0 mt-5 ">
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              <p className="footer-menu-text">
                Sekardangan Indah, Sidoarjo, Jawa Timur, Indonesia <br></br>
                Email: syauqiamiq.work@gmail.com
              </p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">Social Media</h5>
              <a href="facebook.com">
                <img className="footer-social" src={FBIcon} alt="" />
              </a>
              <a href="facebook.com">
                <img className="footer-social" src={IGIcon} alt="" />
              </a>
              <a href="facebook.com">
                <img className="footer-social" src={TiktokIcon} alt="" />
              </a>
              <a href="facebook.com">
                <img className="footer-social" src={TwitterIcon} alt="" />
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">OTHER SYSTEM</h5>
              <a href="" className="footer-link">
                Simponia
              </a>
              <a href="" className="footer-link">
                Sirenta
              </a>
              <a href="" className="footer-link">
                Simutu
              </a>
              <a href="" className="footer-link">
                APK
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
              <a>
                <img src={Apple} alt="apple"></img>
              </a>
              <a>
                <img className="mt-2" src={Google} alt="google"></img>
              </a>
            </Col>
          </Row>
          <Row className="px-0 mb-5 ">
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">Support</h5>
              <img className="umm-image" src={UMMImage} alt="" />
            </Col>
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">Contact Us</h5>
              <p className="footer-menu-text">Email: syauqiamiq.work@gmail.com</p>
              <p className="footer-menu-text">WA: +6281818181818</p>
              <p className="footer-menu-text">Telp: 03119191919</p>
            </Col>
          </Row>
        </Container>
        <Container fluid={"true"} className="footer-copyright">
          <Row>
            <h6 className="text-dark">© Copyright 2021. All Rights Reserved. Developed by Syauqi Amiq</h6>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
