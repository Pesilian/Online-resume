import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/api.css';

function GitAPI(props) {
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
  }, [props.username]); // Dependency array med username så att förfrågan körs om när username ändras

  return (
    <div className="api-container">
      <h2 className="heading">Mina Projekt</h2>

      <ul className="list">
        {repos.map(repo => (
          <li className="listitem" key={repo.id}>
            <a href={repo.svn_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitAPI;
