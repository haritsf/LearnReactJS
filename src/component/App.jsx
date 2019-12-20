import React from 'react';
import Card from './Card';

class App extends React.Component {
  render () {
    return (
      <div className="App">
      <Card
        name="Harits Fathuddin"
        role="FrontEnd"
        nim="21120115130074" />
      <Card
        name="Aufal Marom"
        role="BackEnd"
        nim="21120115130069" />
      <Card 
        name="M. Adinugroho" 
        role="DevOps"
        nim="21120115140063" />
      <Card 
        name="Mukhlish A. Aziz" 
        role="Network Engineer"
        nim="21120115130052" />
    </div>
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
