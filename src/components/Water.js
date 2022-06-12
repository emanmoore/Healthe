import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import "./Water.css";

const Water = () => {
  const water = [
    { name: "Women", calories: "", image: "https://kitchmenow.com/wp-content/uploads/2017/11/dailywaterintake-807x600.jpg", link: "" },
    { name: "How Much", calories: "", image: "https://jennabraddock.com/wp-content/uploads/2019/09/2-4.png", link: "google.com" },
    {
      name: "Men",
      calories: "",
      image: "https://i.pinimg.com/originals/23/15/05/231505f07db49da73ac28ef039e40018.png",
      link: "google.com",
    },
    /*{ name: "Kiwi", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.5BKQsQonTQ2T1fHDJFBUygAAAA&pid=Api", link: "google.com" },
    { name: "Apple", calories: "", image:  "https://tse3.mm.bing.net/th?id=OIP.zhp9_YgbMuFNkG6tPN2vwgAAAA&pid=Api", link: "google.com" },
    { name: "Cantaloupe", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.3ryjGy286DXngGUveJlZPwHaGK&pid=Api", link: "google.com" },
    { name: "Watermelon", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.RlS5wVnLT8HyEQdvQWwJ-AHaGw&pid=Api", link: "google.com" },
    { name: "Strawberry", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.oZB42F64Mt6G9GocwStlwwAAAA&pid=Api", link: "google.com" },
    { name: "Peache", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.RiHXn5V0ZqXN7s0X3J2LWAAAAA&pid=Api", link: "google.com" },
    { name: "Honey Dew", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.XGZp6kBBlIzddlHIlgak2gAAAA&pid=Api", link: "google.com" },
    { name: "Pear", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.T5uYYpYbWCzyc4t66TA8kgAAAA&pid=Api", link: "google.com" },
    { name: "Pine Apple", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.Hk4szJRXCQ99ooXn8ATsBAAAAA&pid=Api", link: "google.com" },*/
    //{ name: "mango", calories: "lorem3", image: "", link: "google.com" },
    //{ name: "mango", calories: "lorem3", image: "", link: "google.com" },
    //{ name: "mango", calories: "lorem3", image: "", link: "google.com" },
  ];

  return (
    <div className="">
      <Row>
        <Col>
          <h1 className="Fruitpage">How Much Water </h1>
          <div
            className="cards-container d-flex flex-wrap flex-column align-items-center justify-content-evenly"
            //data-aos="fade-up"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="300"
          >

            {water.map((water,index) => <Card {...{water,index}} key={index}/>)}

          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Water;
