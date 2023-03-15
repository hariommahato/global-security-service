import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetFeedabackDetailsQuery,
  useUpdateFeedbackMutation,
} from "@/services/api";
import { Providers } from "@/services/provider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useGetFeedabackDetailsQuery(id);
  const [
    updateFeedback,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateFeedbackMutation();
  const [feedbackData, setFeedbackData] = useState({
    fullname: "",
    message: "",
  });

  const { fullname, message } = feedbackData;

  useEffect(() => {
    if (data) {
      const { fullname, message } = data?.feedbackdata;
      setFeedbackData({ fullname, message });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/feedback");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      fullname,
      message,
    };
    console.log(data);
    updateFeedback({ id, data });
  };

  const onChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Toaster />

          <Card
            style={{
              width: "80%",
              //   margin: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Feedback Data</h5>
              <Form.Control
                type="text"
                name="fullname"
                value={fullname}
                onChange={onChange}
              ></Form.Control>
              <Form.Control
                type="text"
                name="message"
                value={message}
                onChange={onChange}
                className="my-3"
              ></Form.Control>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={updateLoading ? true : false}
                className="my-3"
                style={{
                  width: "100%",
                }}
              >
                Update Data
              </Button>
            </form>
          </Card>
        </>
      )}
    </>
  );
};

export default Contact;
Contact.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
