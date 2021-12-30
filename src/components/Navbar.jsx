import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  
  state = {
    value: ''
  }
  
  onChangeValue = (e) => { 
    this.setState({
      value: e.target.value
    })
  }
  
  
  render() {
    return (
    	<div className="navbar">
    		<div className="spans"></div>
    		<div className="search-div">
    			<input type="text" value={this.state.value} onChange={this.onChangeValue} placeholder="Search only username..." />
    			<button onClick={this.props.onSearch.bind(this, this.state.value)}>Search</button>
    		</div>
    	</div>
    )
  }
}

export default Navbar;