
function deleteStorage() {
	localStorage.clear();
}


function setStorage(valor){
	localStorage.setItem(valor,0);
}
	
function getStorage(){
	var jugador = document.getElementById("datosJugador");
	while(jugador.firstChild){
		jugador.removeChild(jugador.firstChild);
	}
	for (var i=0; i < localStorage.length; i++){
		var p = document.createElement("p");
		var br = document.createElement("br");
		var clave= localStorage.key(i);   
		var valor = localStorage[clave];
		var dato = document.createTextNode(clave);
		p.appendChild(dato);
		jugador.appendChild(p);
		jugador.appendChild(br);
		
	}
}

