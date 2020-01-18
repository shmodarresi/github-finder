import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import github from './api/github';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import SearchBar from './components/search/SearchBar';
import Alert from './components/layout/Alert';
import './App.scss';
//import { userInfo } from 'os';

class App extends Component {

  state = { users: [], user:{}, loading: false, alert: null };

  onSearchSubmit = async term => {
    //console.log(term);
    if (term.length > 0) {

      this.setState({ loading: true });

      const response = await github.get(`/search/users?client_id=${process.env.REACT_APP_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_CLIENT_SECRET}`, {
        params: { q: term }
      });

      this.setState({ users: response.data.items, loading: false });
    } else {
      const alrt = { msg: 'Please enter something!', type: 'secondary' };

      this.setState({ alert: alrt });

      setTimeout(() => { this.setState({ alert: null }) }, 5000);
    }
  }

  getUser = async userName => {
    this.setState({ loading: true });

    const response = await github.get(`/users/${userName}?client_id=${process.env.REACT_APP_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({ user: response.data, loading: false });
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {

    //let name='Shohreh';
    const { users, user, loading, alert } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container py-1">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <SearchBar searchUsers={this.onSearchSubmit} clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false} />
                  users: {users.length}
                  <br />
                  <Users users={users} loading={loading} />
                </Fragment>
              )} />
              <Route exact path="/user/:username" render={props => (
                <User { ...props } getUser={this.getUser} user={user} loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
