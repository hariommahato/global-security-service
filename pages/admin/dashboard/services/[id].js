import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetServicesDetailsQuery,
  useUpdateServicesMutation,
} from "@/services/api";
import { Providers } from "@/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Services = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetServicesDetailsQuery(id);
  const [
    updateServices,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateServicesMutation();
  const [servicesData, setServicesData] = useState({
    description: "",
    title: "",
  });
  const [images, setImages] = useState("");
  const { description, title } = servicesData;
  const [imagePreview, setImagePreview] = useState("");

  {
    console.log(data);
  }

  useEffect(() => {
    if (data) {
      const { description, title, images } = data?.services;
      setServicesData({ description, title, images });
      setImagePreview(images?.url);
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      description,
      title,
      images,
    };

    updateServices({ id, data });
  };
  const onChange = (e) => {
    if (e.target.name === "images") {
      const profile = new FileReader();
      profile.onload = () => {
        if (profile.readyState === 2) {
          setImages(profile.result);
          setImagePreview(profile.result);
        }
      };
      profile.readAsDataURL(e.target.files[0]);
    } else
      setServicesData({ ...servicesData, [e.target.name]: e.target.value });
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
          <div
            style={{
              border: "1px solid red",
              height: "auto",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Services Data</h5>
              <Form.Control
                name="title"
                value={title}
                onChange={onChange}
                as={"textarea"}
              ></Form.Control>
              <Form.Control
                className="my-3"
                name="description"
                value={description}
                onChange={onChange}
                as={"textarea"}
              ></Form.Control>
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={onChange}
                multiple
              />

              <div id="createProductFormImage">
                <Image
                  src={imagePreview}
                  alt="Product Preview"
                  width={100}
                  height={100}
                  className="my-3"
                />
                <Image
                  src={images}
                  alt="Product Preview"
                  width={100}
                  height={100}
                  className="my-3"
                />
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={updateLoading ? true : false}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                Update Data
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Services;
Services.getLayout = function PageLayout(page) {
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
