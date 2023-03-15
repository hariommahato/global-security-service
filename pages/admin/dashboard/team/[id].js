import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";
import {
  useGetTeamDetailsQuery,
  useUpdateTeamMutation,
} from "@/services/api";
import { Providers } from "@/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
const Team = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetTeamDetailsQuery(id);
  const [
    updateTeam,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateTeamMutation();
  const [teamData, setTeamData] = useState({
    fullname: "",
    post: "",
    description:""
  });
  const [images, setImages] = useState("");
  const { fullname, post,description } = teamData;
  const [imagePreview, setImagePreview] = useState("")
  

  useEffect(() => {
    if (data) {
      const { description, post,fullname, images } = data?.teamdata;
      setTeamData({ description, post,fullname, images });
      setImagePreview(images?.url);
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/team")
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      description,
      post,
      fullname,
      images,
    };

    updateTeam({ id, data });
  };
  {console.log(data)}
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
      setTeamData({ ...teamData, [e.target.name]: e.target.value });
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
              <h5>Update Team Data</h5>
              <Form.Control
                name="fullname"
                value={fullname}
                onChange={onChange}
               
              ></Form.Control>
              <Form.Control
                name="post"
                value={post}
                onChange={onChange}
                className="my-3"
               
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

export default Team;
Team.getLayout = function PageLayout(page) {
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
