// EMAIL VALIDATION
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null){
    messages.push('Email required')
  }
  else if (IsNotValidEmail(email.value)) {
    messages.push('Valid email required')
  }

  if (messages.length > 0) {
    console.log(messages.length);
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  } else {
    e.preventDefault()
    // Retrieve the user's name input
    var emailInput = document.getElementById('email');
    var userEmail = emailInput.value;
  
    console.log(userEmail);
    // Redirect to the success.html page with the user's name as a query parameter
    window.location.href = 'success-message.html?email=' + encodeURIComponent(userEmail);
  }
})

function IsNotValidEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(inputText.match(mailformat)) {
    return false;
  }
  else {
    return true;
  }
}


