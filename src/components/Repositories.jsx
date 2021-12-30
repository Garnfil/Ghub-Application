import React from 'react';
import ReactDOM from 'react-dom';
import Repository from './Repository';

class Repositories extends React.Component {
  
  state = {
    data: []
  }
  
  render() {
    return (
      <div className="repositories">
        <Repository repos={this.props.repos} />
      </div>
    )
  }
}

export default Repositories;