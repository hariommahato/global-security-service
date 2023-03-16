import { useGetHomeCarouselQuery, useGetWelcomeDataQuery } from "@/services/api";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { FaUnsplash } from "react-icons/fa";
import styles from "../../styles/Carousel.module.css";

export default function CarouselComponent() {
  const { data } = useGetHomeCarouselQuery();
  return (
    <>
      <Carousel fade>
       
        {data?.carousel?.map((item, i) => {
          return item?.videos?.map((data) => {
            return (
              <Carousel.Item className={styles.carouselItem} key={data?.url}>
              <video src={data?.url} width="100%" height="500" muted autoPlay loop />
              </Carousel.Item>
            );
          });
        })}
      </Carousel>
    </>
  );
}


