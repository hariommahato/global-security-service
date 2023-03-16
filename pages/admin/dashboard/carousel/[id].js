import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetCarouselDetailsQuery,
  useUpdateCarouselMutation,
} from "@/services/api";
import { Providers } from "@/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Carousel = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetCarouselDetailsQuery(id);
  const [
    updateCarousel,
    { isSuccess, isError: updateError, isLoading: updateLoading ,},
  ] = useUpdateCarouselMutation();
  const [videos, setVideos] = useState([]);
  const [oldVideo, setOldVideo] = useState([]);

  useEffect(() => {
    if (data) {
      setOldVideo(data?.carousel?.videos);
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
  const updateProductSubmitHandler = (e) => {
    e.preventDefault();
    const carouselData = {
      videos,
    };
    updateCarousel({ id, carouselData });
  };
  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setVideos([]);
    
    setOldVideo([]);

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
              width: "30%",
              margin: "auto",
              alignItems:"center",
              flexDirection:"column",
              height:"20vmax"
              
            }}
          >
            <form onSubmit={updateProductSubmitHandler}>
              <h5>Update Carousel Data</h5>
              <input
                type="file"
                name="videos"
                accept="video/*"
                onChange={updateProductImagesChange}
                multiple
              />
        
              {console.log(updateError)}
              <Button
                id="createProductBtn"
                type="submit"
                disabled={updateLoading ? true : false}
                className="my-3"
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
