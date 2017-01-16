function validateForm(evt){
    evt.preventDefault();
	var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var pass = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var lista = document.getElementsByClassName("form-control")[4].value;
    
    var obj = new Object();
    obj.nombre = name;
    obj.apellido = lastname;
    obj.correo = email;
    obj.psw = pass;
    obj.lista = lista;
    obj.confirmacion = function(){
        var check = true;
        var all = document.getElementsByClassName("form-control");
        if(obj.nombre==''){
            check = false;
            document.getElementById("name").style.borderColor = "rgba(203, 37, 7, 0.7)";
        }
        if(obj.apellido==''){
            check = false;
            document.getElementById("lastname").style.borderColor = "rgba(203, 37, 7, 0.7)";
        }
        if(obj.correo==''){
            check = false;
            document.getElementById("input-email").style.borderColor = "rgba(203, 37, 7, 0.7)";
        }
        if(obj.psw==''){
            check = false;
            document.getElementById("input-password").style.borderColor = "rgba(203, 37, 7, 0.7)";
        }
        if (!check){
            alert("Rellena los campos obligatorios");            
        }else{
            //Elimina el borde rojo de advertencia de todos, alfa. 
            for (var i =0;i<all.length;i++){
                all[i].style.border = "none";
            }
        }
    };
    obj.letras = function(){
        var nom = (/[0-9]/g).test(obj.nombre);
        var ape = (/[0-9]/g).test(obj.apellido);
        if(nom == true ||ape==true){
            alert("No uses numeros en el nombre o apellido");
        }
    };
    obj.mayuscula = function(){
        if((obj.nombre).charAt(0) != (obj.nombre).charAt(0).toUpperCase()){
            alert("El nombre debe empezar con mayuscula");
        }
        if((obj.apellido).charAt(0) != (obj.apellido).charAt(0).toUpperCase()){
            alert("El apellido debe empezar con mayuscula");
        }
    };
    obj.verifemail = function(){
        //verificar correo
        var expression = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        if(!expression.test(obj.correo)){
            alert("Correo no valido");
        }
    };
    obj.passletter = function(){
        //minimo pass
      if((obj.psw).length<6){
          alert("Por favor ingresa un minimo de 6 caracteres");
      }
    };
    obj.passvalid = function(){
      if(obj.psw=="123456" || obj.psw=="098754"){
          alert("no es una contraseña valida");
      }
    };
    obj.bicis = function(){
      if(obj.lista ==0){
          alert("elige una bicicleta");
      }  
    };
    obj.confirmacion();
    obj.letras();
    obj.mayuscula();
    obj.verifemail();
    obj.passletter();
    obj.passvalid();
    obj.bicis();
}
            


