const valores = {
    nombre: /^[a-zA-ZÁ-ÿ]+$/,
    email: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    endEmail: /.([a-z\.]{2,6})$/
}
var form = document.getElementById('formulario');
form.addEventListener('submit',function(evt){
    evt.preventDefault();
  
    if (document.getElementById('nombre').value === ''){
        document.getElementById('errorNombre').textContent='Rellene el campo';
        document.getElementById('errorNombre').className='invalid-feedback';
        document.getElementById('nombre').className='invalid';
        document.getElementById('imagenNombre').src="images/error-icon.svg";
        document.getElementById('imagenNombre').className='success';
        
    }else{
        if (!valores.nombre.exec(document.getElementById('nombre').value)){
            document.getElementById('errorNombre').textContent='Nombre inválido';
            document.getElementById('errorNombre').className='invalid-feedback';
            document.getElementById('nombre').className='invalid';
            document.getElementById('imagenNombre').src="images/error-icon.svg";
            document.getElementById('imagenNombre').className='success';
        }
        else{
            document.getElementById('errorNombre').textContent='Correcto';
            document.getElementById('errorNombre').className='back';
            document.getElementById('nombre').className='valid';
            document.getElementById('imagenNombre').src="images/success-icon.svg";
            document.getElementById('imagenNombre').className='success';
        }
    }
    
    if (document.getElementById('email').value === ''){
        document.getElementById('errorEmail').textContent='Rellene el campo';
        document.getElementById('errorEmail').className='invalid-feedback';
        document.getElementById('email').className='invalid';
        document.getElementById('imagenEmail').src="images/error-icon.svg";
        document.getElementById('imagenEmail').className='success';
        
    }else{
        if (!valores.email.exec(document.getElementById('email').value)){
            document.getElementById('errorEmail').textContent='Email inválido';
            document.getElementById('errorEmail').className='invalid-feedback';
            document.getElementById('email').className='invalid';
            document.getElementById('imagenEmail').src="images/error-icon.svg";
            document.getElementById('imagenEmail').className='success';
            if (!document.getElementById('email').value.includes('@')){
                document.getElementById('imagenEmail').title='Incluye un signo "@" en la dirección de correo electrónico. La dirección "'+email.value+'" no incluye el signo "@"';}
            else{
                document.getElementById('imagenEmail').title='';
            }
        }
        else{
            document.getElementById('errorEmail').textContent='Correcto';
            document.getElementById('errorEmail').className='back';
            document.getElementById('email').className='valid';
            document.getElementById('imagenEmail').src="images/success-icon.svg";
            document.getElementById('imagenEmail').className='success';
        }

    }

    if (document.getElementById('confirmacion_clave').value!=document.getElementById('clave').value){
        document.getElementById('errorConfirmacionClave').textContent='Las contraseñas deben coincidir';
        document.getElementById('errorConfirmacionClave').className='invalid-feedback';
        document.getElementById('confirmacion_clave').className='invalid';
        document.getElementById('imagenConfirmacionClave').src="images/error-icon.svg";
        document.getElementById('imagenConfirmacionClave').className='success'; 

        
    }
    else{
                document.getElementById('errorConfirmacionClave').textContent='Correcto';
                document.getElementById('errorConfirmacionClave').className='back';
                document.getElementById('confirmacion_clave').className='valid';
                document.getElementById('imagenConfirmacionClave').src="images/success-icon.svg";
                document.getElementById('imagenConfirmacionClave').className='success'

                document.getElementById('errorClave').textContent='Correcto';
                document.getElementById('errorClave').className='back';
                document.getElementById('clave').className='valid';
                document.getElementById('imagenClave').src="images/success-icon.svg";
                document.getElementById('imagenClave').className='success';
    }


    if (document.getElementById('clave').value === ''){
        document.getElementById('errorClave').textContent='Rellene el campo';
        document.getElementById('errorClave').className='invalid-feedback';
        document.getElementById('clave').className='invalid';
        document.getElementById('imagenClave').src="images/error-icon.svg";
        document.getElementById('imagenClave').className='success';  
        
    }else{
        if (document.getElementById('clave').value.length<8){
            document.getElementById('errorClave').textContent='La contraseña debe tener al menos 8 carácteres';
            document.getElementById('errorClave').className='invalid-feedback';
            document.getElementById('clave').className='invalid';
            document.getElementById('imagenClave').src="images/error-icon.svg";
            document.getElementById('imagenClave').className='success';   
        }else{
            document.getElementById('errorClave').textContent='Correcto';
            document.getElementById('errorClave').className='back';
            document.getElementById('clave').className='valid';
            document.getElementById('imagenClave').src="images/success-icon.svg";
            document.getElementById('imagenClave').className='success';
        }
    } 

    if (document.getElementById('confirmacion_clave').value === ''){
        document.getElementById('errorConfirmacionClave').textContent='Rellene el campo';
        document.getElementById('errorConfirmacionClave').className='invalid-feedback';
        document.getElementById('confirmacion_clave').className='invalid';
        document.getElementById('imagenConfirmacionClave').src="images/error-icon.svg";
        document.getElementById('imagenConfirmacionClave').className='success'                                
    }else{
        if(document.getElementById('confirmacion_clave').value.length<8){
            document.getElementById('errorConfirmacionClave').textContent='La contraseña debe tener al menos 8 carácteres';
            document.getElementById('errorConfirmacionClave').className='invalid-feedback';
            document.getElementById('confirmacion_clave').className='invalid';
            document.getElementById('imagenConfirmacionClave').src="images/error-icon.svg";
            document.getElementById('imagenConfirmacionClave').className='success' 
        }

    }

    if (valores.nombre.exec(nombre.value)){
        if (valores.email.exec(email.value)){
            if (clave.value.length>=8){
                if (clave.value===confirmacion_clave.value){
                    alert("Tus datos han sido registrados");
                }
            }
        }
    }
    
});