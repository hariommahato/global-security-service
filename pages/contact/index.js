import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Row className={styles.row}>
        <div data-aos="fade-down-right">
          <Col lg={12} md={6} sm={12} className={styles.leftCol}>
            <div data-aos="fade-up-left">
              <div className={styles.headingContainer}>
                <h1 style={{ color: "#E74646", fontWeight: "900" }}>Contact</h1>
                <h1>Us</h1>
              </div>
            </div>

            <div>
              <p className={styles.desc}>
                Walk in to our office for free study abroad counselling,
                application submissions, visa assistance, pre-departure sessions
                and much more.
              </p>
            </div>

            <div className={styles.firstDiv}>
              <Card className={styles.card}>
                <span className={styles.iconContainer}>
                  <BsFillTelephoneFill size={20} /> Phone :+977-01-5916120,
                  9869060120
                </span>
              </Card>
            </div>
            <div className="my-3">
              <Card className={styles.card}>
                <span className={styles.iconContainer}>
                  <BiTime size={20} /> Timing :Sunday - Friday-8:00 am -6:30 pm
                </span>
              </Card>
            </div>
            <div className="my-3">
              <Card className={styles.card}>
                <span className={styles.iconContainer}>
                  <AiFillMail size={20} /> Email :info.goodvives@gmail.com
                </span>
              </Card>
            </div>
          </Col>
        </div>

        <Col lg={5} md={6} sm={12} className={styles.formCol}>
          <div data-aos="flip-left">
            <ContactForm />
          </div>
        </Col>
      </Row>
      <Row className={styles.buttomRow}>
        <Image
          src={
            "https://images.unsplash.com/photo-1589935447067-5531094415d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          }
          height={"0"}
          width={"0"}
          sizes="100vw"
          alt="images"
          className={styles.rowImage}
        />
      </Row>
    </>
  );
};

export default Contact;
