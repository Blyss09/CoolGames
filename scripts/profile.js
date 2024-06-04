let profileName = document.querySelector('#profile a');

let userProfile = JSON.parse(localStorage.getItem('user')) || {username: 'Profile'};

profileName.textContent = userProfile.username;