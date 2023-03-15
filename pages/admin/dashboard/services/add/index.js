import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";

import { Providers } from "@/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/Admin/CarouselAdd.module.css";
import Image from "next/image";
import { useCreateServicesMutation } from "@/services/api";
import { useRouter } from "next/router";

const Services = () => {
  const [createServices, { isError, isLoading, isSuccess }] =
    useCreateServicesMutation();
  const [sercicesData, setServicesData] = useState({
    description: "",
    title: "",
  });
  const router=useRouter()
  const { description, title } = sercicesData;
  const [images, setImages] = useState("../favicon.io");
  const [imagePreview, setImagePreview] = useState("/favicon.io");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/services")
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { title, description, images };
    createServices(data);
  };

  const onChange = (e) => {
    if (e.target.name === "images") {
      const profile = new FileReader();
      profile.onload = () => {
        if (profile.readyState === 2) {
          setImagePreview(profile.result);
          setImages(profile.result);
        }
      };
      profile.readAsDataURL(e.target.files[0]);
    } else {
      setServicesData({ ...sercicesData, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div className={styles.card}>
            <form onSubmit={submitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add Services Data
              </h5>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter Name/Title of service"
                  name="title"
                  value={title}
                  onChange={onChange}
                />
              </div>
              <div className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={description}
                  onChange={onChange}
                />
              </div>
              <div className="my-3">
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={onChange}
                  multiple
                />
              </div>

              <div className={styles.imagePreview}>
                <Image
                  src={imagePreview}
                  alt="Product Preview"
                  œ
                  width={50}
                  height={50}
                />
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                
                style={{width:"100%",marginTop:"2rem"}}
              >
                submit
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
