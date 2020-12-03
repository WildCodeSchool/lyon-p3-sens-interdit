import React from "react";
import dayjs from "dayjs";

export default function Result(props) {
  const flexwrapperCSS = {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "auto",
    alignSelf: "center",
    justifyItems: "center",
    border: "solid #eeeeee 1px",
    borderRadius: "3px",
    margin: "2px",
  };
  const flexwrapperIMG = {
    width: "100px",
    height: "auto",
    marginRight: "1vw",
    alignSelf: "top"

  };
  const flexwrapperBTN = {
    height: "30px",
    margin: "1vw",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    border: "none",
    cursor: "pointer",
    color: "#e30613",
  };
  const flexwrapperDAT = {
    position: "relative",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    fontSize: "2vh",
    top: "-30%",
    left: "100%",
  };
  const textwrapper = {
    width: "50vw",
    height: "auto",
    whiteSpace: "nowrap",
  };


  return (
    <a href={props.url} alt={props.title}>
      <div className="result-flex-wrapper" style={flexwrapperCSS}>
        <img src={props.image} alt={props.id} style={flexwrapperIMG} />
        <div className="result-text-wrapper" style={textwrapper}>
          <h6 style={{ color: "#e30613", margin: "0" }}>
            {props.type ? props.type : ""}
          </h6>
          <h2 style={{ color: "#e30613", margin: "0" }}>{props.title}</h2>
          <p style={flexwrapperDAT}>
            Créé le{" "}
            {props.created_at
              ? dayjs(props.created_at).format("DD/MM/YYYY")
              : "inconnnu"}
          </p>
          <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {props.description}
          </p>
        </div>

        <button style={flexwrapperBTN}>Lire la suite</button>
      </div>
    </a>
  );
}
