import React, { Component } from 'react';
import DataLog from '../component/DataLog';

class DataTables extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('../datalog.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }).then(response => response.json()).then(json => {
            this.setState({
            data: json
            })
        })
    }

    render() {
        return (
              <div className="table">
                <table>
                  <thead>
                      <tr>
                        <th><center>Nomor</center></th>
                        <th><center>Waktu</center></th>
                        <th><center>Senti</center></th>
                        <th><center>Inchi</center></th>
                        <th><center>Judul</center></th>
                        <th><center>Deskripsi</center></th>
                        <th><center>Option</center></th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.data.map(data => {
                      return (
                        <DataLog
                          key={data.id}
                          nomor={data.id}
                          waktu={data.waktu}
                          senti={data.senti}
                          inchi={data.inchi}
                          judul={data.judul}
                          desc={data.desc} />
                      );
                    })
                  }
                  </tbody>
                </table>
              </div>
        );
    }
}

export default DataTables;