function fetchRandomUsers() {
    const promises = [];

    for (let i = 0; i < 5; i++) {
      promises.push(fetch('https://randomuser.me/api').then(response => response.json()));
    }

    Promise.all(promises)
      .then(users => {
        displayUsersInfo(users);
        displaySuccessMessage();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  function displayUsersInfo(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = '';

    users.forEach(user => {
      const userInfoContainer = document.createElement('div');
      userInfoContainer.classList.add('user-info');

      const picture = document.createElement('img');
      picture.src = user.results[0].picture.large;
      userInfoContainer.appendChild(picture);

      const cell = document.createElement('p');
      cell.textContent = `Cell: ${user.results[0].cell}`;
      userInfoContainer.appendChild(cell);

      const city = document.createElement('p');
      city.textContent = `City: ${user.results[0].location.city}`;
      userInfoContainer.appendChild(city);

      const email = document.createElement('p');
      email.textContent = `Email: ${user.results[0].email}`;
      userInfoContainer.appendChild(email);

      const coordinates = document.createElement('p');
      coordinates.textContent = `Coordinates: ${user.results[0].location.coordinates.latitude}, ${user.results[0].location.coordinates.longitude}`;
      userInfoContainer.appendChild(coordinates);

      userContainer.appendChild(userInfoContainer);
    });
  }

  function displaySuccessMessage() {
    const successMessageContainer = document.getElementById('success-message');
    successMessageContainer.textContent = 'Success!';
  }