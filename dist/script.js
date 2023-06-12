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
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
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