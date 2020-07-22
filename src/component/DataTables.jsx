import React, { Component } from "react";
import DataLog from "../component/DataLog";

class DataTables extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:3030/datalogs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        json = json.slice(0, 5);
        // console.log(json);
        this.setState({
          data: json,
        });
      })
      .catch((error) => {
        console.log(error);
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
              <center>Jalur</center>
            </th>
            <th>
              <center>Latitude</center>
            </th>
            <th>
              <center>Longitude</center>
            </th>
            <th>
              <center>Option</center>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((data) => {
            return (
              <DataLog
                key={data.id}
                id={data.id}
                bus={data.device_id}
                jalur={data.drivermessage}
                lat={parseFloat(data.gpslon).toFixed(4)}
                long={parseFloat(data.gpslat).toFixed(4)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default DataTables;
