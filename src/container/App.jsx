import React, {Component, Fragment} from 'react';
import Card from '../component/Card';
import HelloComponent from '../component/HelloComponent';
import StatefullComponent from '../component/StatefullComponent';
import Counter from '../component/Counter';
import '../assets/css/bootstrap.css';

class App extends Component {
  state = {
    angka: 5
  }

  handlePlus = () => {
    // console.log('plus : ', this)
    this.setState({
      angka: this.state.angka + 1
    })
  }

  handleMinus = () => {
    // console.log('minus : ', this)
    if (this.state.angka > 0) {
      this.setState({
        angka: this.state.angka - 1
      })
    }
  }

  render () {
    return (
      <Fragment>
          <div className="row" style={{textAlign: 'center'}}>
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
            <Counter />
          </div>
      </Fragment>
    )
  }
}

export default App;
