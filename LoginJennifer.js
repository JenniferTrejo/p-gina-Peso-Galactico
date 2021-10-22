function Validar(){
	//declarar los datos
	var u, c;
	//recuperar los datos
	u=document.getElementById("Usu").value
	c=document.getElementById("Con").value
	//validar los datos
	if (u=="Jennifer"&&c=="12345"){
		alert("Usuario y contraseña correctos");
		window.open("PesoGalactico.html");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
	else{
		alert("Usuario o Contraseña incorrectos");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
}
