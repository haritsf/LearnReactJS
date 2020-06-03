import React, { Component, Fragment } from "react";
import CardWrapper from "../component/CardWrapper";
import HelloComponent from "../component/HelloComponent";
import StatefullComponent from "../component/StatefullComponent";
import Counter from "../component/Counter";
import DataTables from "../component/DataTables";
import DataLog from "../component/DataLog";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Alert,
  Badge,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

class App extends Component {
  state = {
    angka: 0
  };

  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  handleCounterChange = newValue => {
    this.setState({
      angka: newValue
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          {/* <div className="row" style={{textAlign: 'center'}}>
              <div className="col-lg-12">
                <HelloComponent />
                <h1><span className="badge badge-primary" style={{borderRadius: 15 + 'px'}}>{this.state.angka}</span></h1>
              </div>
              
              <div className="col-lg-12">
                <StatefullComponent />
              </div>
              
              <div className="col-lg-12">
                <Card
                  name="Harits Fathuddin"
                  nim="21120115130074" />
                <Card
                  name="Aufal Marom"
                  nim="21120115130069" />
                <Card 
                  name="M. Adinugroho"
                  nim="21120115140063" />
                <Card 
                  name="Mukhlish A. Aziz" 
                  nim="21120115130052" />
              </div>
              
              <Counter onCounterChange={(value) => this.handleCounterChange(value)} />
            
            </div> */}

          {/* <DataTables/> */}
          
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <HelloComponent />
                <Navbar type="dark" theme="danger" expand="md">
                  {/* <NavbarBrand href="/">Shards React</NavbarBrand> */}
                  <Link className="navbar-brand" to="/">
                    Shards React
                  </Link>
                  <NavbarToggler onClick={this.toggleNavbar} />

                  <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link" to="/data">
                          Data
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link" to="/card">
                          Card
                        </Link>
                      </NavItem>
                      <Dropdown
                        open={this.state.dropdownOpen}
                        toggle={this.toggleDropdown}
                      >
                        <DropdownToggle nav caret>
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Nav>

                    <Nav navbar className="ml-auto">
                      <InputGroup size="sm" seamless>
                        <InputGroupAddon type="prepend">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                        <FormInput
                          className="border-0"
                          placeholder="Search..."
                        />
                      </InputGroup>
                    </Nav>
                  </Collapse>
                </Navbar>
                {/* <h1><span className="badge badge-primary" style={{borderRadius: 15 + 'px'}}>{this.state.angka}</span></h1> */}

                {/* <Link to="/">Home</Link>
              <Link to="/data">Data</Link> */}

                {/* <Link to="/counter">Counter</Link> */}
                <Route path="/" exact component={StatefullComponent} />
                <Route path="/data" component={DataTables} />
                <Route path="/card" component={CardWrapper} />
                {/* <Route path="/counter" component={Counter} /> */}
              </div>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
