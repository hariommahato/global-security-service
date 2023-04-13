import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/About.module.css";

import { useGetAboutQuery } from "@/services/api";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  const { data: aboutData } = useGetAboutQuery();
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div>
        <div className={styles.mainDiv}>
          <div className={styles.text}>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h3>ABOUT COMPANY</h3>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {aboutData?.aboutdata?.map((item, i) => {
            return (
              <Row className={styles.row}>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <Image
                    src={item?.images?.url}
                    height={"0"}
                    width={"0"}
                    sizes="100vw"
                    className={styles.images}
                  />
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div>
                    <h3>
                      Welcome To <span style={{ color: "red" }}>Global</span>{" "}
                      Family
                    </h3>
                    <p>{item?.message}</p>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>

        <MeetOurTeam />
      </div>
    </>
  );
};

export default About;
