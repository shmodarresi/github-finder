import React , { Component} from 'react';
import github from './api/github';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import SearchBar from './components/search/SearchBar';
import './App.scss';
//import { userInfo } from 'os';

class App extends Component{

  state={users:[],loading:false};

  onSearchSubmit = async term => {
    //console.log(term);
    this.setState({loading:true});
    
   const response = await github.get('/search/users',{
      params:{ q:term }
    });

    this.setState({users: response.data.items});

    //console.log(response.data.items);
  }

  render(){

    //let name='Shohreh';

    return (
      <div className="App">
        {/* <Navbar title="Github Finder" icon="fa fa-github"/> */}
        <Navbar/>
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          users: {this.state.users.length}
          <br/>
          {/* <Users users={this.response.data.items} /> */}
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
