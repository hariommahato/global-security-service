import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetContactDetailsQuery,
  useUpdateContactMutation,

} from "@/services/api";
import { Providers } from "@/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useGetContactDetailsQuery(id);
  const [
    updateContact,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateContactMutation();
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    subject: "",
    number: "",
    enquiry: "",
  });

  const { fullname, email, number, subject, enquiry } = contactData;

  useEffect(() => {
    if (data) {
      const { fullname, email, number, subject, enquiry } = data?.contactdata;
      setContactData({ fullname, email, number, subject, enquiry });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/contact");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
      number,
      subject,
      enquiry,
    };
    console.log(data);
    updateContact({ id, data });
  };

  const onChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
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
              <h5>Update Contact Data</h5>
              <Form.Control
                type="text"
                name="fullname"
                value={fullname}
                onChange={onChange}
              ></Form.Control>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                type="number"
                name="number"
                value={number}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                type="text"
                name="subject"
                value={subject}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                type="text"
                name="enquiry"
                value={enquiry}
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
