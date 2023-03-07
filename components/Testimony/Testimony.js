import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        marginTop: "3rem",
        backgroundImage: `url("https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        height: "30vmax",
        objectFit: "cover",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ padding: "2rem" }}>
        <h3 className="text-center " style={{ color: "white" }}>
          Clients <span style={{ fontWeight: "bold" }}>Testimony</span>
        </h3>
      </div>
      <div style={{ width: "80%", margin: "auto", padding: "2rem" }}>
        <Slider {...settings}>
          <div>
            <Card
              style={{
                height: "9rem",
                borderRadius: "none",
                backgroundColor: "#EEEEEE",
                margin: "auto",
              }}
            >
              <p
                style={{ textAlign: "center", color: "gray", padding: "1rem" }}
              >
                We would like to thank Kalinchok Security Services and in
                particular the guards in our residence for their service. We
                have been very happy with their service. Thank you for the past
                4 years.
              </p>
              <span style={{ textAlign: "center" }}>-Hariom Mahato</span>
            </Card>
          </div>
          <div>
            <Card
              style={{
                height: "9rem",
                borderRadius: "none",
                backgroundColor: "#EEEEEE",
                margin: "auto",
              }}
            >
              <p
                style={{ textAlign: "center", color: "gray", padding: "1rem" }}
              >
                We would like to thank Kalinchok Security Services and in
                particular the guards in our residence for their service. We
                have been very happy with their service. Thank you for the past
                4 years.
              </p>
              <span style={{ textAlign: "center" }}>-Hariom Mahato</span>
            </Card>
          </div>
          <div>
            <Card
              style={{
                height: "9rem",
                borderRadius: "none",
                backgroundColor: "#EEEEEE",
                margin: "auto",
              }}
            >
              <p
                style={{ textAlign: "center", color: "gray", padding: "1rem" }}
              >
                We would like to thank Kalinchok Security Services and in
                particular the guards in our residence for their service. We
                have been very happy with their service. Thank you for the past
                4 years.
              </p>
              <span style={{ textAlign: "center" }}>-Hariom Mahato</span>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;
