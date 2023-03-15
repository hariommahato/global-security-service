import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import Loader from "@/components/Loader/Loader";

import { Providers } from "@/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/Admin/CarouselAdd.module.css";
import Image from "next/image";
import { useCreateTeamMutation } from "@/services/api";
import { useRouter } from "next/router";

const Team = () => {
  const [createTeam, { isError, isLoading, isSuccess }] =
    useCreateTeamMutation();
  const [teamData, setTeamData] = useState({
    fullname: "",
    post: "",
    description: "",
  });
  const { fullname, post, description } = teamData;
  const [images, setImages] = useState("../favicon.io");
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState("/favicon.io");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/team");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { fullname,post,description, images };
    createTeam(data);
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
      setTeamData({ ...teamData, [e.target.name]: e.target.value });
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
                Add Team Data
              </h5>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter Fullname"
                  name="fullname"
                  value={fullname}
                  onChange={onChange}
                />
              </div>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter Post"
                  name="post"
                  value={post}
                  className="my-3"
                  onChange={onChange}
                />
              </div>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter About Team"
                  name="description"
                  value={description}
                  as={"textarea"}
                  onChange={onChange}
                  className="my-3"
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
                style={{ width: "100%", marginTop: "2rem" }}
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
