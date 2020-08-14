import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "./Post";

class PostWrapper extends Component {
  state = {
    post: [],
    formPost: {
      id: null,
      title: "",
      body: "",
      userId: null,
    },
  };

  getAllPost = () => {
    axios
      .get("http://127.0.0.1:3030/posts?_sort=id&_order=desc", {
        params: {
          _limit: 9,
        },
      })
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  };

  handleEdit = (data) => {
    console.log(data);
    this.setState({
      formPost: data,
    });
    // axios
    //   .put(`http://127.0.0.1:3030/posts/${data}`, this.state.post)
    //   .then((res) => {
    //     console.log(res);
    //     this.getAllPost();
    //   });
  };

  handleRemove = (data) => {
    axios.delete(`http://127.0.0.1:3030/posts/${data}`).then((res) => {
      console.log(res);
      this.getAllPost();
    });
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

  pushData = () => {
    axios.post("http://127.0.0.1:3030/posts", this.state.formPost).then(
      (res) => {
        console.log(res);
        this.setState({
          formPost: {
            id: null,
            title: "",
            body: "",
            userId: null,
          },
        });
        this.getAllPost();
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  getLast = () => {
    axios
      .get("http://127.0.0.1:3030/posts?_sort=id&_order=desc", {
        params: {
          _limit: 1,
        },
      })
      .then((res) => {
        // console.log(res.data[0].id + 1);
        return res.data[0].id;
        // this.setState({
        //   post: res.data,
        // });
      });
  };

  componentDidMount() {
    this.getAllPost();
  }

  render() {
    return (
      <Fragment>
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
            {/* <button
              type="submit"
              style={{ float: "right" }}
              className="btn btn-md btn-warning btn-pill"
              onClick={this.getLast}
            >
              Get Last
            </button> */}
          </div>
        </div>
        <div className="row">
          {this.state.post.map((post) => {
            return (
              <Post
                key={post.id}
                data={post}
                remove={this.handleRemove}
                edit={this.handleEdit}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default PostWrapper;
