import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetServicesQuery } from "@/services/api";
import { AiFillEye } from "react-icons/ai";
import styles from "../../styles/HomeServices.module.css";
import Loader from "../Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  const { data, isLoading } = useGetServicesQuery();

  useEffect(() => {
    AOS.init();
  });
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div data-aos="zoom-out-right">
            <div className={styles.mainDiv}>
              <div className={styles.topDetailDiv}>
                <div data-aos="zoom-in-down">
                  <h3 className="text-center">
                    We <span className={styles.topHeadline}>Provide</span>
                  </h3>

                  <p className={styles.topParagraph}>
                    state of the art quality service
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.sliderDiv}>
              <Slider {...settings}>
                {data?.services?.map((item, i) => {
                  return (
                    <div key={i}>
                      <Card style={{ width: "14rem", margin: "auto" }}>
                        <Card.Img
                          variant="top"
                          src={item?.images?.url}
                          style={{
                            backgroundSize: "cover",
                            objectFit: "cover",
                            height: "15rem",
                          }}
                        />

                        <Card.Body>
                          <Card.Title>{item?.title}</Card.Title>
                          <Card.Text>
                            {item?.description?.slice(0, 20)}
                          </Card.Text>
                          <Card.Link
                            href="/services"
                            style={{ color: "red", textDecoration: "none" }}
                          >
                            {" "}
                            <AiFillEye />
                            ReadMore
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Services;
