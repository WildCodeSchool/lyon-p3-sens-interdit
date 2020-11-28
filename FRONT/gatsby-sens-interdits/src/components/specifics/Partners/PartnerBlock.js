import React from "react";

const PartnerBlock = ({ title, img }) => {
  return (
    <div className="partner-block to-uppercase">
      <h2>{title}</h2>
      <div>
        {img.map((el, i) => (
          <a href={el.url} key={i} title="myTitle">
            <img
              src={process.env.GATSBY_API_URL + el.image[0].url}
              alt="noalt"
              width="200px"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnerBlock;
