import React, { Component, Fragment } from "react";
import CardWrapper from "../component/CardWrapper";
import HelloComponent from "../component/HelloComponent";
import DataTables from "../component/DataTables";
import { BrowserRouter, Route, Link } from "react-router-dom";

import logo from "../images/logo_spectrum.png";
import Post from "../component/blog/BlogWrapper";

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <header className="sticky-header my-3">
            <div className="container">
              <div className="row">
                <div className="logo">
                  <img
                    src={logo}
                    alt="yah ga kepanggil"
                    width="35px"
                  />
                  <label className="text-secondary ml-2">spectrum.ce</label>
                </div>
                <div className="ml-auto actions-wrapper">
                  <div className="header-actions">
                    <Link className="btn btn-sm btn-outline-primary btn-pill" to="/">Home</Link>
                    <Link className="btn btn-sm btn-outline-dark btn-pill ml-1" to="/data">Data</Link>
                    <Link className="btn btn-sm btn-outline-dark btn-pill ml-1" to="/card">Card</Link>
                    <Link className="btn btn-sm btn-outline-dark btn-pill ml-1" to="/blog">Blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="page-content">
            <div className="content clearfix">
              <HelloComponent />
              <div id="introduction" className="container my-5">
                <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                  <span className="badge badge-pill badge-primary"> </span>
                  <h4 className="lead text-left">
                    <b>Selamat Datang!</b>
                  </h4>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              {/* <Route path="/" exact component={HelloComponent} /> */}
              <Route path="/data" component={DataTables} />
              <Route path="/card" component={CardWrapper} />
              <Route path="/blog" component={Post} />
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
