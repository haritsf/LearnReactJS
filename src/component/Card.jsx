import React from "react";

const Card = props => {
  return (
    <div
      className="card mx-2 my-3"
      style={{
        textAlign: "center",
        display: "inline-flex",
        width: 250 + "px"
      }}
    >
      <div className="card-body">
        <img src={require('../images/' + props.nim + '.jpg')} alt="yah ga kepanggil" style={{ width: 50 + '%' }} />
        <h5 className="label-control mt-3">{props.name}</h5>
        <p className="label-control">{props.nim}</p>
        <button className="btn btn-md btn-outline-primary btn-pill">Uwuwu</button>
      </div>
    </div>
  );
};

export default Card;
