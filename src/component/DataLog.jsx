import React from 'react';

const DataLog = (props) => {
    return (
        <tr style={{textAlign : 'center'}}>
            <td>{props.nomor}</td>
            <td>{props.waktu}</td>
            <td>{props.senti}</td>
            <td>{props.inchi}</td>
            <td>{props.judul}</td>
            <td>{props.desc}</td>
            <td><button className="btn btn-md btn-outline-warning">Edit</button></td>
        </tr>    
    )
}

export default DataLog;