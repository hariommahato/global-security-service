import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/Header.module.css";
import logo from "../../images/logo.png";
import Link from "next/link";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar} sticky="top">
      <Container>
        <Image src={logo} width={80} height={80} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <Navbar.Brand as={Link} href="/">
            Global Security Service
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} href="/feedback">
              Feedback
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/faq"
              style={{ color: "red", textDecoration: "underline" }}
            >
              FAQS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
