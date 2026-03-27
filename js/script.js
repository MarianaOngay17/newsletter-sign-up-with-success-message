document.addEventListener('DOMContentLoaded', function(){
   
const submitBtn = document.querySelector('.newsletter__submit');
const dismissBtn = document.querySelector('.success__button');


    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        var email = document.getElementById('newsletter-email').value.trim();

        const labelError = document.querySelector('.newsletter__email-label--error');
        const inputEmail = document.querySelector('.newsletter__email-input');
        
        if (email === "" || !isValidEmail(email)) {
            labelError.classList.remove('hidden');
            inputEmail.classList.add('newsletter__email-input--error'); 
            return;
        }

        //eliminar errores
        labelError.classList.add('hidden');
        inputEmail.classList.remove('newsletter__email-input--error'); 

        //asignar email 
        const successMail = document.querySelector('.success__mail');
        successMail.textContent = email
        //mostrar div success
        const success = document.querySelector('.success');
        const newsletter = document.querySelector('.newsletter');
    
        success.classList.remove('hidden');
        newsletter.classList.add('hidden');


    });

    dismissBtn.addEventListener('click', function(e) {

        document.getElementById('newsletter-email').value = "";

        const successMail = document.querySelector('.success__mail');
        successMail.textContent = ""
        //mostrar div success
        const success = document.querySelector('.success');
        const newsletter = document.querySelector('.newsletter');
    
        success.classList.add('hidden');
        newsletter.classList.remove('hidden');
    });

});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
