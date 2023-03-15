import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import { useCreateClientMutation, useCreateHomeCarouselMutation } from "@/services/api";
import { Providers } from "@/services/provider";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/Admin/CarouselAdd.module.css";
import Image from "next/image";

const Client = () => {
  const [createClient, { isError, isLoading, isSuccess }] =
    useCreateClientMutation();
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

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
    const data = {
      images,
    };
    createClient(data);
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagePreview([]);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
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
                Add Client
              </h5>
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={createProductImagesChange}
                  multiple
                />
              </div>

              <div className={styles.imagePreview}>
                {imagePreview.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Product Preview"
                    width={50}
                    height={50}
                  />
                ))}
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                style={{
                  marginTop: "3rem",
                }}
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

export default Client;
Client.getLayout = function PageLayout(page) {
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
