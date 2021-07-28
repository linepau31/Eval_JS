// Url API : https://www.ericfreelance.fr/api/check_user.php

const check_user = {
    login: 'eric@free.fr',
    password: '123456',
}; 
 
const options = {
    method: 'POST',
    body: JSON.stringify(check_user),
    headers: {
        'Content-Type': 'application/json'
    }
}
 
fetch('https://www.ericfreelance.fr/api/check_user.php', options)
    .then(res => res.json())
    .then(res => console.log(res));

const Form = document.getElementById('myForm');
const Span = document.querySelector('.message');

function validateEmail() {
  let Email = document.forms["myForm"]["login"].value;
  if (Email == "eric@free.fr") {
    Span.innerHTML ="Vous êtes désormais connecté !";
    return true;
  } 

  else (Email != "eric@free.fr") 
  {
    Span.innerHTML ="L’authentification a échoué !";
    return false;
  }  
} 

function validatePassword() {
  let Password = document.forms["myForm"]["password"].value;
  if (Password == "123456") {
    Span.innerHTML ="Vous êtes désormais connecté !";
    return true;
  } 
  else (Password != "123456") 
  {
    Span.innerHTML ="L’authentification a échoué !";
    return false;
  }
}

Form.addEventListener('submit', (e) => {

    const inpEmail = document.getElementById('login');

    if(inpEmail.value.trim() == ""){ // si vide on arrête la soumission
        

        const ErrorEmail = document.getElementById('erreurEmail');
        
        ErrorEmail.innerHTML = "Le champs Identification est requis !";
        ErrorEmail.style.color = 'red';

        e.preventDefault();
    } 

    const inpPassword = document.getElementById('password');
    let Regex = /^[1-9]+$/; // on accepte les chiffres de 1 à 9 répéter

    if(inpPassword.value.trim() == ""){ // si vide on arrête la soumission
        

        const ErrorPassword = document.getElementById('erreurPassword');
        ErrorPassword.innerHTML = "Le champs Mot de Passe est requis !";
        ErrorPassword.style.color = 'red';
        e.preventDefault();
    }
    else if (Regex.test(inpPassword.value) == false){ // si ce n'est pas bon
       
        const ErrorPassword = document.getElementById('erreurPassword');
        ErrorPassword.innerHTML = "Le Mot de Passe doit comporter uniquement des chifres !";
        ErrorPassword.style.color = 'red';
         e.preventDefault();
    }

});


// Fonction qui génère un nombre aléatoire
const changeChif = function () {
  // Générer un nombre entre 1 et 6
  const nombreDecimal = (Math.random() * 9) + 1
  const nombre = Math.trunc(nombreDecimal)

  // Retourner ce nombre
  return nombre
}







