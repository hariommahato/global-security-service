import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import { useGetFaqDetailsQuery, useUpdateFaqMutation } from "@/services/api";
import { Providers } from "@/services/provider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useGetFaqDetailsQuery(id);
  const [
    updateFaq,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateFaqMutation();
  const [faqData, setFaqData] = useState({
    title:"",
    description:""
  });
  const { title,description} = faqData;
  useEffect(() => {
    if (data) {
      const { title,description} = data?.faqdata;
      setFaqData({title,description});
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/faq");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      title,description
    };
    updateFaq({ id, data });
  };

  const onChange = (e) => {
    setFaqData({ ...faqData, [e.target.name]: e.target.value });
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
              <h5>Update Faq Data</h5>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={onChange}
                as={"textarea"}
              ></Form.Control>
              <Form.Control
                type="email"
                name="description"
                value={description}
                onChange={onChange}
                className="my-3"
                as={"textarea"}
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
