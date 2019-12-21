import React, {Component, Fragment} from 'react';
import Card from '../component/Card';
import HelloComponent from '../component/HelloComponent';
import StatefullComponent from '../component/StatefullComponent';
import '../assets/css/bootstrap.css';

class App extends Component {
  render () {
    return (
      <Fragment>
          <div className="row" style={{textAlign: 'center'}}>
          <div className="col-lg-12">
            <HelloComponent />
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
            <div className="col-lg-12">
              <Card 
                name="Mukhlish A. Aziz" 
                nim="21120115130052" />
            </div>
          </div>
      </Fragment>
    )
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <Card
//         name="Harits Fathuddin"
//         role="FrontEnd" />
//       <Card
//         name="Aufal Marom"
//         role="BackEnd" />
//       <Card 
//         name="M. Adinugroho" 
//         role="DevOps" />
//       <Card 
//         name="Mukhlish A. Aziz" 
//         role="Network Engineer" />
//     </div>
//   )
// }

export default App;
