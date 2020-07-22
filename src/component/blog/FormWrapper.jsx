import React, { Component } from "react";
import axios from "axios";

class FormWrapper extends Component {
  state = {
    formPost: {
      id: null,
      title: "",
      body: "",
      userId: null,
    },
  };

  handleUpdate = (event) => {
    let formPostNew = { ...this.state.formPost };
    formPostNew[event.target.name] = event.target.value;

    let timeStamp = new Date().getTime();
    formPostNew["id"] = timeStamp;
    formPostNew["userId"] = Math.floor(Math.random() * 10) + 1;
    this.setState({
      formPost: formPostNew,
    });
  };

  pushData = () => {
    axios.post("http://127.0.0.1:3030/posts", this.state.formPost).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  handleSubmit = () => {
    if (this.state.formPost.body === "") {
      if (this.state.formPost.title === "") {
        console.log("dua dua nya kosong");
      } else {
        alert("Deskripsi tidak boleh kosong");
      }
    } else if (this.state.formPost.title === "") {
      if (this.state.formPost.body === "") {
        console.log("dua dua nya kosong");
      } else {
        alert("Judul tidak boleh kosong");
      }
    } else {
      this.pushData();
    }
  };

  render() {
    return (
      <div className="row">
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <input
            type="text"
            name="title"
            className="form-control"
            value={this.state.formPost.title}
            id="form-title"
            placeholder="title"
            onChange={this.handleUpdate}
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <textarea
            type="text"
            className="form-control"
            value={this.state.formPost.body}
            name="body"
            id="form-body"
            placeholder="description"
            onChange={this.handleUpdate}
          ></textarea>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <button
            type="submit"
            style={{ float: "right" }}
            className="btn btn-md btn-primary btn-pill"
            onClick={this.handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    );
  }
}

export default FormWrapper;
