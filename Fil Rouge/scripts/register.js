document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        // Récupérer les utilisateurs existants depuis le localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Vérifier si un utilisateur avec le même email ou pseudo existe déjà
        const existingEmail = users.find(user => user.email === email);
        const existingUsername = users.find(user => user.username === username);

        if (existingEmail) {
            alert('Un compte avec cette adresse email existe déjà.');
        } else if (existingUsername) {
            alert('Un compte avec ce pseudonyme existe déjà.');
        } else {
            // Récupérer le compteur d'ID depuis le localStorage
            let userIdCounter = localStorage.getItem('userIdCounter') || '0';
            userIdCounter = parseInt(userIdCounter, 10);

            // Créer un nouvel utilisateur avec un ID unique
            const newUser = {
                id: userIdCounter + 1,
                username: username,
                email: email,
                password: password
            };

            // Ajouter le nouvel utilisateur à la liste des utilisateurs
            users.push(newUser);

            // Enregistrer la liste mise à jour des utilisateurs dans le localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Mettre à jour le compteur d'ID et le stocker dans le localStorage

            alert('Compte créé avec succès!');
            window.location.href = 'login.html';
        }
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
