import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import { useCreateHomeCarouselMutation } from "@/services/api";
import { Providers } from "@/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/Admin/CarouselAdd.module.css";
import Image from "next/image";

const Carousel = () => {
  const [createHomeCarousel, { isError, isLoading, isSuccess }] =
    useCreateHomeCarouselMutation();
  const [videos, setVideos] = useState([]);

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
   const data ={
    videos
   }
    createHomeCarousel(data);
  };
  
  {console.log(isError)}

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setVideos([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setVideos((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  {console.log(videos)}
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
                Add Carousel
              </h5>
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="videos"
                  accept="video/*"
                  onChange={createProductImagesChange}
                  multiple
                />
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

export default Carousel;
Carousel.getLayout = function PageLayout(page) {
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
