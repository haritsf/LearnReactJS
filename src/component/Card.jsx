import React from 'react';
import logo from '../assets/images/logo_spectrum.png';

const Card = (props) => {
    return (
        <div className="card shadow rounded mx-3 my-3" style={{textAlign: 'center', display: 'inline-block', width: 250 + 'px'}}>
            <div className="card-body">
                <img src={logo} alt="yah ga kepanggil" style={{width: 50 + '%'}}/>
                <h4 className="label-control mt-3">{props.name}</h4>
                <p className="label-control">{props.nim}</p>
                <button className="btn btn-md btn-primary">Uwuwu</button>
            </div>
        </div>
    )
}

export default Card;