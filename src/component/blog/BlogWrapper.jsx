import React, { Component, Fragment } from "react";
import PostWrapper from "./PostWrapper";
// import FormWrapper from "./FormWrapper";

class BlogWrapper extends Component {
  render() {
    return (
      <Fragment>
        <span className="badge badge-pill badge-success"> </span>
        <h4 className="lead text-left">
          <b>Blog Post</b>
        </h4>
        <PostWrapper></PostWrapper>
      </Fragment>
    );
  }
}

export default BlogWrapper;
