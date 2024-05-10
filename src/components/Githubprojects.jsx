import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/api.css';

//Väljer attanvända mig av props för att kunna byta och lägga till användare vid behov.

function GitHubProjects(props) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.username}/repos`)
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.username]);

  return (
    <div className="api-container">
      <ul className="list">
        {repos.map(repo => (
          <li className="listitem" key={repo.id}>
            <p>{repo.description}</p>
            <a href={repo.svn_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubProjects;
