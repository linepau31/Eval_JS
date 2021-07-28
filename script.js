// Url API : https://www.ericfreelance.fr/api/check_user.php

function check_user() {

    const logPass = 'eric@free.fr|123456';
    return logPass;
    
}; 
 
const promise = fetch('https://www.ericfreelance.fr/api/check_user.php', {

  method: 'POST',
  body: JSON.stringify(check_user),
  headers: {
      'Content-Type': 'application/json'
  },
});

promise.then(async (response) => {

  try {
    console.log(response);
    const contenu = await response.json();
    console.log(contenu);
  } 
  catch (e) {
    console.log(e);
  }
});
    

function validation() {

		let combinaison = logPass().split('|');
		let login = combinaison[0];
		let password = combinaison[1];

		if (document.getElementById('login').value.toLowerCase() == login.toLowerCase() && document.getElementById('password').value == password) 
		{
			document.getElementById('message').innerText = "Vous êtes désormais connecté !"; // return true
		}	
		else {
			document.getElementById('message').innerText = "L'authentification a échoué !"; // return false
		}
			
	}

const Form = document.getElementById('myForm');

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

/*

// Les cellules
let cel = document.querySelector('#cellule');
let div = document.createElement('div');
div.setAttribute('id', 'cases')
div.style.width = '3,125rem';
div.style.height = '3,125rem';
div.style.justifyContent = 'center';
div.style.display = 'grid';
div.style.gridTemplateColumns = 'repeat(4, 4rem)';
div.style.gridTemplateRows = 'repeat(4, 4rem)';

for (let i = 0; i < 16; i++) {
    let span = document.createElement('span');
    span.style.border = '2px solid #ffffff';
    span.style.background = '#e6e6e6';
    span.style.cursor = 'pointer';
    span.style.display = 'flex';
    span.style.alignItems = 'center';
    span.style.justifyContent = 'center';
    div.appendChild(span);
}

cel.appendChild(div);  */


generation();

	function generation() {

		let nb_alea;
		let test = true; 
		let chaine = "";

		purger(); // permet de nettoyer la grille pour régenerer la grille

		for (let i = 0; i < 10; i++) {

			while (test == true) {
				nb_alea = Math.floor(Math.random() * 16); // floor au dessus du chiffre
				if (chaine.indexOf("-" + nb_alea + "-") > -1)
				{
					nb_alea = Math.floor(Math.random() * 16);
				}	
				else {
					document.getElementById('case' + nb_alea).innerHTML = "<input type='button' value='" + i + "' onClick='document.getElementById(\"password\").value += " + i + "' />";
					chaine += "-" + nb_alea + "-";
					test = false;
				}
			}

			test = true;
		}
	}

	function purger() { // régenère la grille
			for (let i = 0; i < 16; i++) {
				document.getElementById('case' + i).innerHTML = ""; // réinitialise à vide ""
			}
			document.getElementById('login').value = "";
			document.getElementById('password').value = "";
	}








