import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import { useGetFeedbackQuery } from "@/services/api";
import styles from "../../styles/Testimony.module.css";
import Loader from "../Loader/Loader";
const Testimony = () => {
  const { data, isLoading } = useGetFeedbackQuery();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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

          <div
           className={styles.sliderContainer}
          >
            <Slider {...settings}>
              {data?.feedbackdata?.map((item, i) => {
                return (
                  <div>
                    <Card className={styles.card}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          gap: "1rem",
                        }}
                      >
                        <div>
                          <h6> {item?.message}</h6>
                        </div>
                        <p>--{item.fullname}</p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimony;
