    window.onload = function(){
    (function () {
        'use strict'
    
        let forms = document.querySelectorAll('.needs-validation')
    
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            else {
                event.preventDefault(); 
                window.location.href = 'payment_done.html'; 
            }
            form.classList.add('was-validated')
            }, false)
        })
    })()
    }