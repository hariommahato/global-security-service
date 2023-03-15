import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";

import { Providers } from "@/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/Admin/CarouselAdd.module.css";
import Image from "next/image";
import { useCreateWelcomeDataMutation } from "@/services/api";

const WelcomeData = () => {
  const [createWelcomeData, { isError, isLoading, isSuccess }] =
    useCreateWelcomeDataMutation();
  const [welcomedata, setWelcomeData] = useState({
    description: "",
  });
  const { description } = welcomedata;
  const [images, setImages] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
    }
  });
  const createProductSubmitHandler = (e) => {
    e.preventDefault();
   const data={description,images}
    createWelcomeData(data);
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
      setWelcomeData({ ...welcomedata, [e.target.name]: e.target.value });
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
            <form onSubmit={createProductSubmitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add Welcome Data
              </h5>
              <div>
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
                  alt="Product Preview"œ
                  width={50}
                  height={50}
                />
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                className="my-4"
              >
                Create Carousel
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default WelcomeData;
WelcomeData.getLayout = function PageLayout(page) {
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
