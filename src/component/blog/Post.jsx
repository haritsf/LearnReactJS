import React from 'react';

const Post = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card my-3">
                <img className="card-img-top" src={"https://placeimg.com/200/150/tech?t="+Math.floor(Math.random() * 1000000) + 1} alt="placeimg" />
                <div className="card-body">
                    <h4 className="card-title text-fiord-blue">{props.data.title}</h4>
                    <p className="card-text" align="justify">{props.data.body}</p>
                    <button className="btn btn-outline-danger btn-md btn-pill mr-1" onClick={() => props.remove(props.data.id)}>Hapus</button>
                    <button className="btn btn-outline-primary btn-md btn-pill ml-1" onClick={() => props.edit(props.data)}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Post;