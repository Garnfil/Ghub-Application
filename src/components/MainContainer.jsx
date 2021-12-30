import React from 'react';
import ReactDOM from 'react-dom';
import ProfileContainer from './ProfileContainer';
import Repositories from './Repositories';
import searchGif from './search.gif';

class MainContainer extends React.Component {
  
  state={
    data: []
  }
  
  render() {
    if (!this.props.isSearch) {

      return(
        <div class="message-container">
        	<img src={searchGif} alt=""/>
        	<h2>Search user to see all user's repositories. Have a nice day!!</h2>
        </div>
      )
    }
    return (
      <div className='main-container'>
        <ProfileContainer profile={this.props.dataProfile} />
        <Repositories repos={this.props.repos} />
      </div>
    )
  }
}

export default MainContainer;