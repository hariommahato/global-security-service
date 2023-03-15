import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div>
          <h4>UsefulLinks</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href={"/"} className={styles.links}>
              Home
            </Link>
            <Link href={"/about"} className={styles.links}>
              AboutUs
            </Link>
            <Link href={"/contact"} className={styles.links}>
              Contact
            </Link>
            <Link href={"/service"} className={styles.links}>
              Services
            </Link>
          </div>
        </div>

        <div>
          <h4>Contacts</h4>
          <div>
            <p>Sallghari,Bhaktapur</p>
            <p>9808899681</p>
            <p>hariommahato20@gmail.com</p>
          </div>
        </div>

        <div>
          <h4>Follow Us </h4>
          <div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>youtube</p>
          </div>
        </div>
      </div>
      <div>
        <p style={{textAlign:"center",color:"gray"}}>All Right Reserved &copy; Global Security Services  --CreatedBy:<span style={{color:"red"}}>Unitech It Solution</span> </p>
      </div>
    </footer>
  );
};

export default Footer;
