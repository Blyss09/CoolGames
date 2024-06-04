document.addEventListener('DOMContentLoaded', () => {
    const players = [
        { name: 'Alice', score: 73 },
        { name: 'Aurelie', score: 58 },
        { name: 'Theo', score: 98 },
        { name: 'David', score: 67 },
        { name: 'Julie', score: 46 },
        { name: 'Killian', score: 38 },
        { name: 'Benoit', score: 64 },
        { name: 'Orianne', score: 85 },
        { name: 'Julien', score: 39 },
        { name: 'Kevin', score: 75 },
        { name: 'Manon', score: 96 },
        { name: 'James', score: 80 },
    ];

    function renderPlayers() {
        const playersList = document.getElementById('players-list');
        playersList.innerHTML = '';

        players.sort((a, b) => b.score - a.score);

        players.forEach((player, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.score}</td>
            `;
            playersList.appendChild(row);
        });
    }

    renderPlayers();
});


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.navigation');
    const main = document.querySelector('main');
    const body = document.querySelector('body');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        main.classList.toggle('menu-active');
        body.classList.toggle('overflowHidden');
        window.scrollTo ({top:0, behavior:"smooth"});
    });
});

let profileName = document.querySelector('#profile a');

let userProfile = JSON.parse(localStorage.getItem('user')) || {username: 'Profile'};

profileName.textContent = userProfile.username;