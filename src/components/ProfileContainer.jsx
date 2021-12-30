import React from 'react';
import ReactDOM from 'react-dom';

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile-container">
      	<div className="profile-content">
      		<img src={this.props.profile.avatar_url} className="image" />
      		<h2>{this.props.profile.name}</h2>
      		<ul className="other-info">
      			<li>Username: <span>{this.props.profile.login}</span></li>
      			<li>Bio: <span>{this.props.profile.bio}</span></li>
      			<li>Repositories: <span>{this.props.profile.public_repos}</span></li>
      			<li>Github Link: <span>{this.props.profile.html_url}</span></li>
      		</ul>
      	</div>
      </div>
    )
  }
}

export default ProfileContainer;