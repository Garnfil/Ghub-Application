import React from 'react';
import ReactDOM from 'react-dom';

class Repository extends React.Component {
  
  onCopyText = (text) => {
    navigator.clipboard.writeText(text)
    alert(`Copied: ${text}`);
  }
  
  
  render() {
    return (
      this.props.repos.map(repo => 
			<div class="repository">
				<div class="circles">
					<div class="circle"></div>
					<div class="circle"></div>
					<div class="circle"></div>
				</div>
				<h2>{repo.name}</h2>
				<div class="links">
					<div class="icon">
						<a target='_blank' href={repo.html_url}><i class="fas fa-link"></i></a>
					</div>
					<div class="link">
						{repo.html_url}
					</div>
				</div>
				<div class="links">
					<div class="icon" onClick={this.onCopyText.bind(this, repo.clone_url)}>
						<i class="far fa-copy"></i>
					</div>
					<div class="link">
						{repo.clone_url}
					</div>
				</div>
				<div class="created">Created at: <span>{repo.created_at}</span></div>
				<span class="language">{repo.language}</span>
			</div>
      )
    )
  }
}

export default Repository;