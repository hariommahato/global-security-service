import React from "react";
import Slider from "react-slick";
import { CiRead } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const OurClient = () => {
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
    <div style={{width:"80%",margin:"auto",marginTop: "3rem"}}>
      <h3 style={{ textAlign: "center" }}>
        Our <span style={{ color: "red", fontWeight: "bold" }}> Clients</span>
      </h3>
      <div style={{paddingTop:"2rem",paddingBottom:"2rem"}}>

      
      <Slider {...settings} >
        <div >
          <Image
            src={
              "http://www.ksecurity.com.np/ui/images/client-logo/rbblogo.jpg"
            }
            width={200}
            height={100}
            style={{
                margin:"auto"
            }}
          />
        </div>
        <div>
          <Image
            src={
              "http://www.ksecurity.com.np/ui/images/client-logo/finn.jpg"
            }
            width={200}
            height={100}
            style={{
                margin:"auto"
            }}
          />
        </div>
        <div>
          <Image
            src={
              "http://www.ksecurity.com.np/ui/images/client-logo/snv.png"
            }
            width={200}
            height={100}
            style={{
                margin:"auto"
            }}
          />
        </div>
        <div>
          <Image
            src={
              "http://www.ksecurity.com.np/ui/images/client-logo/plan.png"
            }
            width={200}
            height={100}
            style={{
                margin:"auto"
            }}
          />
        </div>
        <div style={{margin:"auto"}}>
          <Image
            src={
              "http://www.ksecurity.com.np/ui/images/client-logo/rne.jpg"
            }
            width={200}
            height={100}
            style={{
                margin:"auto"
            }}
          />
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default OurClient;
