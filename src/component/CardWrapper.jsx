import React, { Component } from "react";
import Card from "../component/Card";

class CardWrapper extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-6 col-lg-12">
          <Card name="Harits Fathuddin" nim="21120115130074" />
          <Card name="Aufal Marom" nim="21120115130069" />
          <Card name="M. Adinugroho" nim="21120115140063" />
          <Card name="Mukhlish A. Aziz" nim="21120115130052" />
        </div>
      </div>
      </div>
    );
  }
}

export default CardWrapper;
