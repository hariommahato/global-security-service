import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "./ContactForm.module.css";
import { useCreateContactMutation } from "@/services/api";
const ContactForm = () => {
  const [createContact, { isError, isLoading, isSuccess }] =
    useCreateContactMutation();
  const router = useRouter();
  const [formdata, setFormData] = useState({
    fullname: "",
    number: "",
    email: "",
    subject: "",
    enquiry: "",
  });

  const { fullname, number, email, subject, enquiry } = formdata;

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Submitted Successfully");
      router.push("/");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { fullname, email, number, subject, enquiry };

    createContact(data);
  };
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Toaster />
      <div style={{ width: "100%" }}>
        <Card>
          <div className={styles.contentContainer}>
            <h5>We'd Love to Hear From You</h5>
            <h6>Fill in your details and we’ll call you back!</h6>
          </div>
          <div className={styles.formcontainer}>
            <Form>
              <div className="my-2">
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="fullname"
                  value={fullname}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-2">
                <Form.Control
                  type="number"
                  placeholder="Contact Number"
                  name="number"
                  value={number}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-2">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-2">
                <Form.Control
                  type="text"
                  placeholder="Subject ..."
                  name="subject"
                  value={subject}
                  onChange={onChange}
                ></Form.Control>
              </div>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enquiry"
                  name="enquiry"
                  value={enquiry}
                  onChange={onChange}
                ></Form.Control>
              </div>
            </Form>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={submitHandler} className={styles.Button}>
              Submit Message
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContactForm;
