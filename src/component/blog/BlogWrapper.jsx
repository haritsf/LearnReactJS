import React, { Component, Fragment } from "react";
import FormWrapper from "./FormWrapper";
import PostWrapper from "./PostWrapper";

class BlogWrapper extends Component {
  render() {
    return (
      <Fragment>
        <span className="badge badge-pill badge-success"> </span>
        <h4 className="lead text-left">
          <b>Blog Post</b>
        </h4>
        <FormWrapper></FormWrapper>
        <PostWrapper></PostWrapper>
      </Fragment>
    );
  }
}

export default BlogWrapper;
