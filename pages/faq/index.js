import { useGetFaqQuery } from "@/services/api";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  const { data } = useGetFaqQuery();
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "2rem",
        height: "50vh",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>FAQS</h3>
      <div>
        <Accordion>
          {data?.faqdata?.map((item, i) => {
            return (
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{item?.title}</Accordion.Header>
                <Accordion.Body>{item?.description}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
