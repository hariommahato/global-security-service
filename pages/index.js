import Head from "next/head";
import { Inter } from "next/font/google";
import { Button } from "react-bootstrap";
import CarouselComponent from "@/components/Carousel/Carousel";
import Services from "@/components/Services/Services";
import OurClient from "@/components/OurClient/OurClient";
import Testimony from "@/components/Testimony/Testimony";
import { useEffect, useReducer, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useGetWelcomeDataQuery } from "@/services/api";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Loader from "@/components/Loader/Loader";
export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data, isLoading } = useGetWelcomeDataQuery();

  useEffect(() => {
    handleShow();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Global Security Services</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                color: "red",
              }}
            >
              Welcome to Global Security Services

              <p>
              ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
              </p>
            </Modal.Body>
          </Modal>

          <Head>
            <title>Global Security</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <CarouselComponent />
            {data?.welcomedata?.map((item, i) => {
              return (
                <div
                  className={styles.welcomedataContainer}
                  key={i}
                  style={{
                    backgroundImage: `url(${item?.images?.url})`,
                  }}
                >
                  <h3 className={styles.h3}>
                    Welcome To <span className={styles.span}>Global</span>{" "}
                    Security Service
                  </h3>

                  <div className={styles.homeDescriptionContainer}>
                    <p>{item?.description}</p>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      padding: "2vmax",
                    }}
                  >
                    <Link href={"/about"}>
                      <Button variant="danger">AboutUs</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
            <Services />
            <OurClient />
            <Testimony />
          </main>
        </>
      )}
    </>
  );
}
