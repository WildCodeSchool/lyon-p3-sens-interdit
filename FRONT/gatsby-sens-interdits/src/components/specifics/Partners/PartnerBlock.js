import React from "react";

const PartnerBlock = ({ title, img }) => {
  return (
    <div className="partner-block to-uppercase">
      <h2>{title}</h2>
      <div>
        {img.map(el => (
          <img key={el} src={el} alt={el} width="200px" />
        ))}
      </div>
    </div>
  );
};

export default PartnerBlock;
