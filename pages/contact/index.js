import React, { useEffect, useState } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { BsTelephone, BsGlobe } from "react-icons/bs";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import styles from "../../styles/Contact.module.css";
import { toast, Toaster } from "react-hot-toast";
import { useCreateContactMutation } from "@/services/api";
import { useRouter } from "next/router";
const Contact = () => {
  const [createContact, { isError, isLoading, isSuccess }] =
  useCreateContactMutation();
  const router=useRouter()
  const [contactData,setContactData]=useState({
    fullname:"",
    email:"",
    number:"",
    subject:"",
    enquiry:"",
  })

  const {fullname,email,number,subject,enquiry}=contactData
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Submitted Successfully")
      router.push("/");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { fullname,email,number,subject,enquiry };
    createContact(data);
  };
  const onChange=(e)=>{
    setContactData({...contactData,[e.target.name]:e.target.value})
  }
  return (
    <>
    <Toaster/>
      <div className={styles.mainDiv}>
        <div className={styles.text}>
          <h3>CONTACT</h3>
        </div>
      </div>
      <Container>
        <Row style={{ marginTop: "3rem " }}>
          <Col xs={12} md={6} sm={12} lg={6}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    justifyContent: "center",
                  }}
                >
                  <h5
                    style={{
                      color: "red",
                    }}
                  >
                    Get In Touch
                  </h5>
                  <span>Balkumari Marg,samakushi,kathmandu </span>
                  <span>
                    <BsTelephone
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginRight: "10px",
                      }}
                    />
                    867888888{" "}
                  </span>
                  <span>
                    <AiOutlineMobile
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginRight: "10px",
                      }}
                    />
                    867888888{" "}
                  </span>
                  <span>
                    <FaViber
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginRight: "10px",
                      }}
                    />
                    867888888{" "}
                  </span>
                  <span>
                    <AiOutlineMail
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginRight: "10px",
                      }}
                    />
                    info@.com
                  </span>
                  <div>
                    <span>
                      <BsGlobe
                        style={{
                          fontSize: "20px",
                          color: "red",
                          marginRight: "10px",
                        }}
                      />
                      info@.com
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card style={{ width: "100%" }}>
              <h5 style={{ padding: "1rem 0 0 1rem", color: "red" }}>
                Enquiry
              </h5>
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    style={{ padding: "1rem" }}
                    name="fullname"
                    value={fullname}
                    onChange={onChange}
                  />
                  <input
                    type="number"
                    placeholder="Your Number"
                    style={{ padding: "1rem" }}
                    name="number"
                    value={number}
                    onChange={onChange}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={{ padding: "1rem" }}
                    name="email"
                    value={email}
                    onChange={onChange}
                  />{" "}
                  <input
                    type="text"
                    placeholder="Subject"
                    style={{ padding: "1rem" }}
                    name="subject"
                    value={subject}
                    onChange={onChange}
                  />
                  <textarea placeholder="Enquiry" rows={2}  name="enquiry"
                    value={enquiry}
                    onChange={onChange} />
                  <Button
                    style={{ backgroundColor: "#001253", padding: ".5rem" }}
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{marginTop:"2rem",width:"1"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.907148187232!2d85.34462199771188!3d27.718002980080442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1990d274b3fb%3A0xccb2e767fee08d62!2sMultiple%20Security%20Services%20Pvt.Ltd!5e0!3m2!1sen!2snp!4v1678260457561!5m2!1sen!2snp"
          
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default Contact;
