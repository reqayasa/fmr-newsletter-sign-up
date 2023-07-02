// Retrieve the user's name from the query parameter
var params = new URLSearchParams(window.location.search);
var userEmail = params.get('email');

// Display the user's name in the success message

var emailText = document.getElementById('email-text');
emailText.textContent = userEmail;