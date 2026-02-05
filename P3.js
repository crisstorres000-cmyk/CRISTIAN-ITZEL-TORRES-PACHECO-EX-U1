document.getElementById("Boton").addEventListener("click", function(){

    let texto = document.getElementById("Palabra").value;
    let telefono = document.getElementById("Teléfono").value;
    let correo = document.getElementById("Correo").value;
    let contraseña = document.getElementById("Contraseña").value;
    let color = document.getElementById("color").value;

    alert("El texto ingresado es: " + texto + ", el teléfono es: " + telefono + ", Correo: " + correo + ", Contraseña: " + contraseña);

    console.log("Botón presionado. Texto ingresado: " + texto + " Teléfono: " + telefono + " Correo: " + correo + " Contraseña" + contraseña);

    //document.getElementsByTagName("p")[0].innerText = "Has ingresado: " + texto + ", Número ingresado: " + numero + ", Teléfono" + telefono;

    document.getElementsByTagName("p")[0].innerText = "Has ingresado: " + texto;
    document.getElementsByTagName("p")[1].innerText = "Teléfono: " + telefono;
    document.getElementsByTagName("p")[2].innerText = "Correo: " + correo;
    document.getElementsByTagName("p")[3].innerText = "Contraseña: " + contraseña;

    document.getElementsByTagName("body")[0].style.backgroundColor = color;



});