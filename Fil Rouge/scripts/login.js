document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Récupérer les utilisateurs existants depuis le localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Rechercher l'utilisateur correspondant à l'email dans la liste des utilisateurs
    const storedUser = users.find(user => user.email === email);

    if(storedUser) {
        // Vérifier si le mot de passe correspond
        if (password === storedUser.password) {
            alert('Connexion réussie');
            // Enregistrement du pseudonyme sur le site
            localStorage.setItem('user', JSON.stringify(storedUser));
            window.location.href = 'main.html';
        } else {
            alert('Email ou mot de passe incorrect');
        }
    } else {
        alert('Aucun compte trouvé avec cet email, veuillez vous inscrire.');
    }
});

