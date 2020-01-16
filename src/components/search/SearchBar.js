import React, {Component} from 'react';

class SearchBar extends Component{

    state={term:''};

    formSubmit = event =>{
        event.preventDefault();

        this.props.searchUsers(this.state.term);
        this.setState({term:''});
        //console.log(this.state.term);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    Search User:
                    <div className="d-flex">
                        <input type="text" className="form-control" onChange={e=> this.setState({term: e.target.value})} value={this.state.term} />
                        <button type="submit" className="btn btn-dark ml-1" >Search</button>
                    </div>
                </form>
                {this.props.showClear && <button className="btn btn-primary mt-2" onClick={this.props.clearUsers} >clear</button>}
            </div>
        )
    }
}

export default SearchBar
