import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/uglogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo2" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ujjwal-gupta-a595811b9/" target='_blank' ><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://github.com/heyujjwal" target='_blank'><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.instagram.com/ujjwal._.gupta_/" target='_blank'><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer