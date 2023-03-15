import React from "react";
import Slider from "react-slick";
import { CiRead } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useGetClientQuery } from "@/services/api";

const OurClient = () => {
  const { data } = useGetClientQuery();
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <div style={{ width: "80%", margin: "auto", marginTop: "3rem" }}>
      <h3 style={{ textAlign: "center" }}>
        Our <span style={{ color: "red", fontWeight: "bold" }}> Clients</span>
      </h3>
      <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Slider {...settings}>
          {data?.client?.map((item, i) => {
            return item?.images?.map((data) => {
              return (
                <div key={data?.url}>
                  <Image
                    src={data?.url}
                    width={200}
                    height={100}
                    style={{
                      margin: "auto",
                    }}
                    alt="clientImage"
                  />
                </div>
              );
            });
          })}
        </Slider>
      </div>
    </div>
  );
};

export default OurClient;
