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
    }
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
      formPost: data
    });
    // axios.put(`http://127.0.0.1:3030/posts/${data}`, this.state.post).then((res) => {
    //   console.log(res);
    //   this.getAllPost();
    // });
  }
  
  handleRemove = (data) => {
    axios.delete(`http://127.0.0.1:3030/posts/${data}`).then((res) => {
      this.getAllPost();
    });
  };

  componentDidMount() {
    this.getAllPost();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          {this.state.post.map((post) => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} edit={this.handleEdit} />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default PostWrapper;
