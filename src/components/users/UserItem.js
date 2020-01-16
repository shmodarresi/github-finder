import React, { Component } from 'react'

const UserItem = ({user:{login, avatar_url, html_url}}) => {
    return (
        <div className="card" style={{ width: '18rem',marginBottom: '1rem' }}>
            <img className="card-img-top" src={avatar_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={html_url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}


export default UserItem
