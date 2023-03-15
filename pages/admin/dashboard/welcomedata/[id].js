import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetWelcomeDetailsQuery,
  useUpdateWelcomeDataMutation,
} from "@/services/api";
import { Providers } from "@/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const WelcomeData = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetWelcomeDetailsQuery(id);
  const [
    updateWelcomeData,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateWelcomeDataMutation();
  const [welcomdedata,setWelcomeData]=useState({
    description:"",
  })
  const [images, setImages] = useState("");
  const {description}=welcomdedata;
  const [imagePreview, setImagePreview] = useState("");
  
  useEffect(() => {
    if (data) {
      const {description,images}=data?.welcomedata
      setWelcomeData({description,images})
      setImagePreview(images?.url)
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
    const data={
        description,images
    }
    console.log(data)
    updateWelcomeData({ id, data });
  };
  console.log(images)

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
    } else setWelcomeData({ ...welcomdedata, [e.target.name]: e.target.value });
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
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Carousel Data</h5>
              <Form.Control
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
                />
                <Image
                  src={images}
                  alt="Product Preview"
                  width={100}
                  height={100}
                />
              </div>
              
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
