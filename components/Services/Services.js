import React from "react";
import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import { CiRead } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetServicesQuery } from "@/services/api";
const Services = () => {
  const { data } = useGetServicesQuery();
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
      <div style={{ marginTop: "3rem" }}>
        <div style={{ width: "100%", margin: "auto" }}>
          <h3 style={{ textAlign: "center" }}>
            We <span style={{ color: "red", fontWeight: "bold" }}>Provide</span>
          </h3>
          <p style={{ fontStyle: "italic", color: "red", textAlign: "center" }}>
            state of the art quality service
          </p>
        </div>
      </div>

      <div style={{ width: "80%", margin: "auto", marginTop: "2rem" }}>
        <Slider {...settings}>
          {data?.services?.map((item, i) => {
            return (
              <div key={i}>
                <Card style={{ width: "14rem"}}>
                  <Card.Img
                    variant="top"
                    src={item?.images?.url}
                    style={{
                      backgroundSize: "cover",
                      objectFit: "cover",
                      height:"15rem"
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>{item?.description}</Card.Text>
                    <CiRead />
                    <Button
                      variant="link"
                      style={{ color: "red", textDecoration: "none" }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Services;
