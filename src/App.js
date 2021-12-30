import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';

class App extends React.Component {
  
  state = {
    isSearch: false,
    searchName: '',
    data: [],
    repos: []
  }
  
  onSearch = (value) => {
    const fetchOne = fetch(`https://api.github.com/users/${value}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data,
        searchName: value,
        isSearch: true
      })
    })
    
    const fetchTwo = fetch(`https://api.github.com/users/${value}/repos`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        repos: data,
      })
    })
    
  }
  
  render() {
    return(
      <div>
        <Navbar onSearch={this.onSearch} />
        <MainContainer repos={this.state.repos} dataProfile={this.state.data} isSearch={this.state.isSearch} />
      </div>
    )
  }
  
  
}

export default App;
