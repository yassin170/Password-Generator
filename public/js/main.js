// Reprise de tout les elements de l'html pour les reutiliser apres

let passwordLengthInput = document.getElementById('password-length');
let uppercaseCheckbox = document.getElementById('uppercase-checkbox');
let lowercaseCheckbox = document.getElementById('lowercase-checkbox');
let numbersCheckbox = document.getElementById('numbers-checkbox');
let symbolsCheckbox = document.getElementById('symbols-checkbox');
let generatedPasswordInput = document.getElementById('generated-password');
let generateButton = document.querySelector('button');


// Fonction pour generer le mot de passe
function generatePassword() {
    // Caracteres disponibles en fonction de quel option l'utilisateur coche
    let characters = '';
    if (uppercaseCheckbox.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseCheckbox.checked) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbersCheckbox.checked) characters += "0123456789";
    if (symbolsCheckbox.checked) characters += "&|@#()§$/*-+.=;:,<>?^";

    // verifie si au moins une des options est coché
    if (characters === '') {
        alert('Veuillez selectionner au moins une option !');
        return;
    };

    // Generation du mot de passe
    let password = '';
    let length = passwordLengthInput.value;

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    };

    // Affiche le mot de passe generer 
    generatedPasswordInput.value = password;
};

passwordLengthInput.addEventListener('input', () =>{
    // limite la longueur du mot de passe a 20 caracteres
    if (passwordLengthInput.value > 20) {
        passwordLengthInput.value = 20;
    };
});

generateButton.addEventListener('click', generatePassword);


