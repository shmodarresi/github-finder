import React, { Component } from 'react';
import github from './api/github';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import SearchBar from './components/search/SearchBar';
import Alert from './components/layout/Alert';
import './App.scss';
//import { userInfo } from 'os';

class App extends Component {

  state = { users: [], loading: false, alert: null };

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
      const alrt={msg:'Please enter something!',type:'secondary'};
      
      this.setState({alert:alrt});

      setTimeout(()=>{this.setState({alert:null})}, 5000);
    }


    //console.log(response.data.items);
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {

    //let name='Shohreh';
    const { users, loading,alert } = this.state;

    return (
      <div className="App">
        {/* <Navbar title="Github Finder" icon="fa fa-github"/> */}
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <SearchBar searchUsers={this.onSearchSubmit} clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false} />
          users: {users.length}
          <br />
          {/* <Users users={this.response.data.items} /> */}
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
