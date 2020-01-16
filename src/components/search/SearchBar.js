import React, {Component} from 'react';

class SearchBar extends Component{

    state={term:''};

    formSubmit = event =>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
        //console.log(this.state.term);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    Search User:
                    <input type="text" className="form-control" onChange={e=> this.setState({term: e.target.value})} value={this.state.term} />
                </form>
            </div>
        )
    }
}

export default SearchBar
