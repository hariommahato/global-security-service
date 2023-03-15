import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import { wrapper } from "@/services/store";
import Image from "next/legacy/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/About.module.css";
import { getSession } from "next-auth/react";
import { useGetAboutQuery } from "@/services/api";

const About = () => {
  const { data: aboutData } = useGetAboutQuery();
  return (
    <>
      <div>
        <div className={styles.mainDiv}>
          <div className={styles.text}>
            {console.log(aboutData)}
            <h3>ABOUT COMPANY</h3>
          </div>
        </div>

        {aboutData?.aboutdata?.map((item, i) => {
          return (
            <Row className={styles.row}>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{
                  minHeight: "30rem",
                  backgroundImage: `url(${item?.images?.url})`,
                  objectFit: "cover",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div></div>
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

        <MeetOurTeam />
      </div>
    </>
  );
};

export default About;
