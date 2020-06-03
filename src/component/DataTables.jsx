import React, { Component } from "react";
import DataLog from "../component/DataLog";

class DataTables extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  render() {
    return (
      <table className="table table-striped table-hovered" id="dataTables">
        <thead>
          <tr>
            <th>
              <center>Bus</center>
            </th>
            <th>
              <center>Latitude</center>
            </th>
            <th>
              <center>Longitude</center>
            </th>
            <th>
              <center>Jalur</center>
            </th>
            <th>
              <center>Option</center>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(data => {
            return (
              <DataLog
                key={data.id}
                nomor={data.device_id}
                waktu={data.drivermessage}
                senti={parseFloat(data.gpslon).toFixed(4)}
                inchi={parseFloat(data.gpslat).toFixed(4)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default DataTables;
