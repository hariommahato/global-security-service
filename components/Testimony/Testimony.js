import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import { useGetFeedbackQuery } from "@/services/api";
import styles from "../../styles/Testimony.module.css";
const Testimony = () => {
  const { data } = useGetFeedbackQuery();
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
        backgroundImage: `url("https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
      className={styles.mainDiv}
    >
      <div className="my-3">
        <h3 className={styles.h3}>
          Clients <span style={{ color: "red" }}>Testimonial</span>
        </h3>
      </div>
      <div className={styles.contentContainer}>
       ∑∑∑∑
      </div>
    </div>
  );
};

export default Testimony;
