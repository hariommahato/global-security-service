import React from "react";
import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import { CiRead } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
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
    <>
      <div style={{ marginTop: "3rem" }}>
        <div style={{ width: "100%", margin: "auto" }}>
          <h3 style={{ textAlign: "center" }}>
            We <span style={{ color: "red", fontWeight: "bold" }}>Provide</span>
          </h3>
          <p style={{ fontStyle: "italic", color: "red", textAlign: "center" }}>
            state of the art quality service
          </p>
          <p
            style={{
              width: "80%",
              margin: "auto",
              fontSize: "1vmax",
              color: "gray",
              textAlign: "center",
            }}
          >
            As a security services provider, using state-of-the-art systems and
            with the most efficient usage of resources, KSS can provide you the
            maximum security per rupees spent! All this without compromising on
            our core values of integrity, responsibility and having you and your
            assets safe and secure at all times.
          </p>
        </div>
      </div>

      <div style={{ width: "80%", margin: "auto", marginTop: "2rem" }}>
        <Slider {...settings}>
          <div>
            <Card style={{ width: "12rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>{" "}
          <div>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "12rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "12rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "12rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "12rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "12rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7889450/pexels-photo-7889450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>Guarding Services</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <CiRead />
                <Button
                  variant="link"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Services;
