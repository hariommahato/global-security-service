import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/MeetOurTeam.module.css";
import { useGetTeamQuery } from "@/services/api";
const MeetOurTeam = () => {
  const { data } = useGetTeamQuery();
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className={styles.maindiv}>
        <div>
          <h3 className="text-center">
            Meet Our <span className={styles.heading}>Team</span>
          </h3>
        </div>

        <div
          className={styles.bgImageDiv}
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
          }}
        >
          <div
            style={{
              paddingTop: "3vmax",
            }}
          >
            <Slider {...settings}>
              {data?.teamdata?.map((item, i) => {
                return (
                  <div>
                    <Card className={styles.card}>
                      <div
                       className={styles.cardDiv}
                      >
                        <Image
                          src={item?.images?.url}
                          width={80}
                          height={80}
                          className={styles.imgBorder}
                        />
                        <p>{item?.fullname}</p>
                      </div>

                      <Card.Body>
                        <Card.Title>{item?.post}</Card.Title>
                        <Card.Text>{item?.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
