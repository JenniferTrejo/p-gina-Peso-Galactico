function CalculoDePeso(){
	//declarar los datos
	var m,g,P;
	//recuperar los valores de las cajas de texto y asignar a las variables
	m=parseInt(document.getElementById("Masa").value);
	g=parseInt(document.getElementById("Gra").value);
	P=m*g/9.8
	//mostrar los resultados en la caja de texto
	document.getElementById("Pes").value=P;
}
function Borrar(){
	document.ElementById("Masa").value="";
	document.ElementById("Gra").value="";
	document.ElementById("Pes").value="";
}
