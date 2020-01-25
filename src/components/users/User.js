import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.username);
    }

    render() {
        const { login, name, avatar_url, company, blog, bio, public_repos, public_gists, html_url, followers, following, hireable } = this.props.user;

        if (this.props.loading) {

            return <Spinner />

        } else {

            return (
                <div>
                    <header className="d-flex flex-row my-1">
                    <Link to="/" className="btn btn-light mr-auto">Back to search</Link> 
                    <span className="d-inline-flex flex-row align-items-center">Hireable {hireable ? <i className="fa fa-check-circle text-success ml-1"></i> : <i className="fa fa-times-circle text-danger ml-1"></i>}</span>
                    </header>
                
                <div className="card flex-row py-2">
                    <div className="text-center col">
                        <img src={avatar_url}  className="rounded-circle" style={{width:150}}/>
                        <div>{name}</div>
                    </div>
                    <div className="col-8">
                        <strong>Bio:</strong>
                        <p>{bio}</p>
                        <strong>Company: </strong>{company}<br/>
                        <a className="btn btn-primary mt-3" href={html_url}>Link to profile</a>
                    </div>
                </div>
                <div className="card flex-row justify-content-center mt-2 py-2">
                    <ul className="m-0">
                        <li className="badge badge-secondary mr-1">Followers: {followers}</li>
                        <li className="badge badge-success mr-1">Following: {following}</li>
                        <li className="badge badge-primary mr-1">Repos: {public_repos}</li>
                        <li className="badge badge-danger">Gists: {public_gists}</li>
                    </ul>
                </div>
                </div>
            );
        }
    }
}

export default User;