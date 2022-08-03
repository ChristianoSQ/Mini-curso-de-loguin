function showPassword(r) {
 
 
  const fieldPassword = document.getElementById('field-password');

  console.log(r)
  if (eye.style.display === 'none' || eye.style.display === "") {
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
    fieldPassword.type = 'text';
  } else {
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldPassword.type = 'password';
  }
};

const eye = document.getElementById('eye');
eye.onclick = showPassword
const eyeSlash = document.getElementById('eye-slash');
eyeSlash.onclick = showPassword

document.getElementById('btn-login').addEventListener('click', function(e) {
  e.preventDefault();
  alert('logado!');
});
