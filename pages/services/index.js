import React, { useState } from "react";
import styles from "../../styles/Services.module.css";
import FullWidthTabs from "@/components/Tab/TabPanel";
import { useGetServicesQuery } from "@/services/api";
const Services = () => {
  const {data}=useGetServicesQuery()
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.text}>
          <h3>SERVICES</h3>
        </div>
      </div>

      <div className={styles.objective}>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
            height: "20vmax",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={styles.imgDiv}
        ></div>

        <div>
          <h3>
            Our <span style={{ color: "red" }}>Objective</span>
          </h3>
          <p
            style={{
              color: "gray",
              fontSize: "0.8rem",

              textAlign: "justify",
            }}
          >
            Kalinchok Security Services is manned and run by security personnel
            from both Nepal Army and Police with minimumn 18 years of service.
            Their knowledge, planning, execution and reporting techniques has
            made us capable of working with any possible security scenarios.
          </p>
          <div>
            <p style={{ color: "gray", fontSize: "0.8rem" }}>
              Our objectives to quality services are mentioned below.
            </p>
            <ul>
              <li>To deliver client safety and satisfaction.</li>
              <li>
                To ensure that all Security operatives are given adequate
                training for optimal performance.
              </li>
              <li>
                To guarantee the credibility of all deployed operatives through
                proper bio data verification.
              </li>
              <li>To deploy right person for the right place.</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ width: "60%", margin: "auto", marginTop: "3rem" }}>
        <h3 style={{ textAlign: "center" }}>
          Our <span style={{ color: "red" }}>Services</span> In Brief
        </h3>
        <div className={styles.tabContainer}>
        <FullWidthTabs />
        </div>
       
      </div>
    </>
  );
};

export default Services;
