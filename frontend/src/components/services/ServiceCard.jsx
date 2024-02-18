import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="services__card__container">
      <div className="services__card">
        <div className="services__card__icon-container">
          <img
            src={service?.imageUrl}
            alt="Icon"
            className="service__card__icon"
          />
        </div>
      </div>
      <p className="services__card__container__title">{service?.title}</p>
    </div>
  );
};

export default ServiceCard;
