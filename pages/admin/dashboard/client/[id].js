import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetClientDetailsQuery,
  useUpdateClientMutation,
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
  const { data, isError, isLoading } = useGetClientDetailsQuery(id);
  const [
    updateClient,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateClientMutation();
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagePreview, setImagesPreviews] = useState([]);
  useEffect(() => {
    if (data) {
      setOldImages(data?.client?.images);
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
    const clientData = {
      images,
    };
    updateClient({ id, clientData });
  };
  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreviews([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreviews((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
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
              alignItems: "center",
              flexDirection: "column",
              height: "20vmax",
            }}
          >
            <form onSubmit={updateProductSubmitHandler}>
              <h5>Update Client Data</h5>
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
              <div id="createProductFormImage">
                {oldImages &&
                  oldImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image.url}
                      alt="Old Product Preview"
                      width={100}
                      height={100}
                    />
                  ))}
              </div>

              <div id="createProductFormImage">
                {imagePreview.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Product Preview"
                    width={100}
                    height={100}
                  />
                ))}
              </div>
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
