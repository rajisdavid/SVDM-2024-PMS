document.addEventListener('DOMContentLoaded', () => {
    // Load existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Registration form handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            if (users[username]) {
                alert('Username already exists');
            } else {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful. Please log in.');
                window.location.href = 'index.html'; // Redirect to login page
            }
        });
    }

    // Login form handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            if (users[username] && users[username] === password) {
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'home.html'; // Redirect to home page
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Logout button handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html'; // Redirect to home page
        });
    }

    // Display user section if logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        displayUserSection(loggedInUser);
    }

    // scroll smooot
    // script.js
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // Hide header when scrolled down more than 100px
    if (scrollPosition > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 300) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }

//     header.style.backgroundPosition = `center ${-scrollPosition / 3, -100}px`;
// });


    // Menu icon handler
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Handle feature image click to show description
    const featureItems = document.querySelectorAll('.feature-item');
    const featureDescription = document.getElementById('feature-description');
    
    featureItems.forEach(item => {
        item.addEventListener('click', () => {
            const description = item.getAttribute('data-description');
            featureDescription.textContent = description;
            featureDescription.classList.add('visible');
        });
    });

    // Function to toggle sections
    function toggleSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.toggle('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Event listeners for menu buttons
    document.getElementById('toggle-dashboard').addEventListener('click', () => toggleSection('dashboard'));
    document.getElementById('toggle-booking').addEventListener('click', () => toggleSection('booking'));
    document.getElementById('toggle-realtime').addEventListener('click', () => toggleSection('realtime'));
    document.getElementById('toggle-report').addEventListener('click', () => toggleSection('report'));

    function displayUserSection(username) {
        const loginSection = document.getElementById('loginSection');
        const userSection = document.getElementById('userSection');
        const usernameDisplay = document.getElementById('usernameDisplay');
        const menuIcon = document.getElementById('menuIcon');

        if (loginSection && userSection && usernameDisplay && menuIcon) {
            loginSection.style.display = 'none';
            userSection.style.display = 'block';
            usernameDisplay.textContent = username;
            menuIcon.style.display = 'block';
        }
    }
});
