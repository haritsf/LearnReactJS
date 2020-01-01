import React from 'react';
import logo from '../images/logo_spectrum.png';
// import haritsf from '../images/21120115130074.jpg';

const Card = (props) => {
    return (
        <div className="card shadow rounded mx-3 my-3" style={{textAlign: 'center', display: 'inline-block', width: 250 + 'px'}}>
            <div className="card-body">
                <img src={logo} alt="yah ga kepanggil" style={{width: 50 + '%'}}/>
                {/* <img src={require('images/' + props.nim + '.jpg')} alt="yah ga kepanggil" style={{width: 50 + '%'}}/> */}
                <h5 className="label-control mt-3">{props.name}</h5>
                <p className="label-control">{props.nim}</p>
                <button className="btn btn-md btn-outline-primary">Uwuwu</button>
            </div>
        </div>
    )
}

export default Card;