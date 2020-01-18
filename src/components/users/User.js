import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.username);
    }

    render() {
        const {login , name, company, blog, bio, public_repos, public_gists, html_url} = this.props.user;

        if(this.props.loading){

            return <Spinner/>  
              
       }else{

        return (
            <div>
                {name}
            </div>
        );
       }
    }
}

export default User;