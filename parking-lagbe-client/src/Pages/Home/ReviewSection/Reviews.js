import React, { useEffect, useState } from "react"


import { Row } from "react-bootstrap"
import Review from "./Review"
import './ReviewSection.css'



const Reviews = () => {
  const [collectreviews, setCollectReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/review/collectreviews")
      .then((res) => res.json())
      .then((data) => setCollectReviews(data));
  }, []);
  
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
    <section className="mt-5 py-5 mytestimonial" data-aos="fade-up" data-aos-duration="2000">
    <div className="container">
      <Row  data-aos="fade-down"
      data-aos-duration="1500">
        <h6 className="text-light-green text-center mt-5 pt-5">
          Testimonial
        </h6>
        <h2 className="text-center abril-font">What Our Customer Says</h2>
        <p className="text-center mb-4">
          You always take your reviews and ratings
          searchable by brand or star rating. Find the brand new car and all car items for our shop.
         We always try to best quality  car and letest car to our shop if you try to advice our shop for your rating and comment.
         
        </p>
      </Row>

        {collectreviews?.map((collectreview) => (
          <Review key={collectreview._id} collectreview={collectreview}></Review>
        ))}
    
    </div>
  </section>
  );
};

export default Reviews;