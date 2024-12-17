document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const zipCode = document.getElementById('zipCode').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const namePattern = /^[A-Za-z]+$/;
    const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!namePattern.test(firstName)) {
        alert('Please enter a valid first name.');
        return;
    }

    if (!namePattern.test(lastName)) {
        alert('Please enter a valid last name.');
        return;
    }

    if (!zipPattern.test(zipCode)) {
        alert('Please enter a valid ZIP code.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and contain both letters and numbers.');
        return;
    }

    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify({ email, password, firstName, lastName, zipCode }));
    alert('Registration successful! You can now log in.');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
        document.getElementById('hiddenMessage').style.display = 'block';
        document.getElementById('loginSound').play();
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});
