import React from 'react';
import '.././index.css';
import logo from '../images/logo_spectrum.png';

const Card = (props) => {
    return (
        <div className="card">
            <img className="logo" src={logo} alt="yah ga kepanggil"/>
            <p className="title">{props.name}</p>
            <p>{props.role}</p>
            <p>{props.nim}</p>
        </div>
    )
}

export default Card;