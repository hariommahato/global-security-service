import { useCreateFeedbackMutation } from "@/services/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../styles/Feedback.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  const [createFeedback, { isError, isLoading, isSuccess }] =
    useCreateFeedbackMutation();
  const router = useRouter();
  const [feedbackData, setFeedbackData] = useState({
    fullname: "",
    message: "",
  });
  const { fullname, message } = feedbackData;
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Submitted Successfully");
      router.push("/");
    }
    AOS.init();
  }, [isError, isSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { fullname, message };
    createFeedback(data);
  };
  const onChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Toaster />
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className={styles.mainDiv}>
          <Card
            style={{
              padding: "2rem",
            }}
          >
            <h3 className="text-center">
              <span style={{ color: "red" }}>GLOBAL</span> SECURITY SERVICE
            </h3>
            <p className="text-center">
              We would love to hear from you! Please take a moment to let us
              know about your experience.
            </p>
            <div>
              <Form.Control
                type="text"
                placeholder="Your Full Name"
                name="fullname"
                value={fullname}
                onChange={onChange}
              />
              <Form.Control
                type="text"
                placeholder="Your Message"
                as={"textarea"}
                className="my-3"
                name="message"
                value={message}
                onChange={onChange}
              />
              <Button
                style={{
                  width: "10rem",
                }}
                variant="danger"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Feedback;
