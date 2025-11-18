$(document).ready(() => {
    
    // Validacion del formulario con jQuery
    $('#formulario-contacto').on('submit', (evento) => {
        
        // Prevenir el envío normal del formulario
        evento.preventDefault();
        
        // Obtener los valores de los campos usando jQuery
        const nombre = $('#nombre').val();
        const email = $('#email').val();
        const asunto = $('#asunto').val();
        const mensaje = $('#mensaje').val();
        
        // Validar que los campos no estén vacíos
        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            // Mostrar mensaje de error con jQuery
            $('#mensaje-formulario').html('<div class="alert alert-danger" role="alert">Por favor, completa todos los campos del formulario.</div>');
        } else {
            // Validar formato de email
            if (!email.includes('@')) {
                $('#mensaje-formulario').html('<div class="alert alert-warning" role="alert">Por favor, ingresa un email válido.</div>');
            } else {
                // Mostrar mensaje de éxito con jQuery
                $('#mensaje-formulario').html('<div class="alert alert-success" role="alert">¡Gracias por tu mensaje, ' + nombre + '! Te contactaremos pronto.</div>');
                
                // Limpiar el formulario después de enviar
                $('#formulario-contacto')[0].reset();
            }
        }
        
        // Hacer scroll suave al mensaje
        $('html, body').animate({
            scrollTop: $('#mensaje-formulario').offset().top - 100
        }, 600);
    });
    
    // Smooth scroll
    $('.nav-link').on('click', (evento) => {
        
        // Prevenir comportamiento por defecto del enlace
        evento.preventDefault();
        
        // Obtener el href del enlace
        const destino = $(evento.currentTarget).attr('href');
        
        // Animacion del scroll
        $('html, body').animate({
            scrollTop: $(destino).offset().top - 80
        }, 800);
    });
});