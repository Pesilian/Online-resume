const username = 'Pesilian';

const GitAPI = () => {
  fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {},
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Bearbeta svaret och visa dina repon på din hemsida
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching repos:', error);
      alert('Nåt hände!');
    });
};

export default GitAPI;
