import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Card.css";

const Card = ({ water, index, children, className }) => {
  const getImgeLink = (water) =>
    water?.image?.length ? water.image : "https://image.shutterstock.com/image-photo/authentic-west-african-pepper-soup-600w-556585273.jpg";

  const renderDefault = () => (
    <div className="card card-with-height p-3 w-50 m-3">
      <Row>
        <Col>
          <span className="text-lg text-primary h4 water-card-heading">
            {index + 1} {water.name}
          </span>
          <span className="text-lg water-card-calories">{water.calories}</span>

          <div className="water-card-img-container mt-3">
            <img src={getImgeLink(water)} alt="" />
          </div>

          <span className="text-lg water-card-link">
            <a href="{water.link}"></a>
          </span>
        </Col>
      </Row>
    </div>
  );

  const renderCustom = () => {
    const classes = "card p-3 " + className;
    return <div className={classes}>{children}</div>;
  };

  const renderPage = () => (children ? renderCustom() : renderDefault());

  return renderPage();
};

export default Card;
