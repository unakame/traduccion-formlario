

function traducir(){

  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar sesión";

}

 traducir();

 function formLoad(e){
 // esta funcion esta por terminar
   var nombre = document.getElementById("nombre").value;
   document.getElementById("nom").innerHTML = nombre;
   var apellido = document.getElementById("apellido").value;
   document.getElementById("ape").innerHTML = apellido;
   var dni = document.getElementById("dni").value;
   document.getElementById("dnii").innerHTML = dni;
   var direccion = document.getElementById("direccion").value;
   document.getElementById("dire").innerHTML = direccion;

   document.getElementById("formu").onsubmit = function(e){
     e.preventDefault();
   }
 }
