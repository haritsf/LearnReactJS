import React from 'react';

const DataLog = (props) => {
    return (
        <tr style={{textAlign : 'center'}}>
            <td>{props.bus}</td>
            <td>{props.jalur}</td>
            <td>{props.lat}</td>
            <td>{props.long}</td>
            <td><a href={props.id} className="btn btn-md btn-outline-warning">Edit</a></td>
        </tr>    
    )
}

export default DataLog;