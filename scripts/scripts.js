////////////////////////////////////////////////////////Dificultad////////////////////////////////////////////////////////////7
function facil(){
	modoFacil = true;
	modoMedio = false;
    modoDificil = false;
	var facil = 8;
	var head = document.getElementsByTagName("head")[0];
	var css = document.createElement("link");
	css.setAttribute("rel","stylesheet");
	css.setAttribute("type","text/css");
	css.setAttribute("href","estilo/facil.css");
	head.appendChild(css);
	
	tamanoGrid(facil);
	reverso(facil);
	cargarImagenes(facil)
}

function media(){
	modoFacil = false;
	modoMedio = true;
    modoDificil = false;
	var media = 18;
	var head = document.getElementsByTagName("head")[0];
	var css = document.createElement("link");
	css.setAttribute("rel","stylesheet");
	css.setAttribute("type","text/css");
	css.setAttribute("href","estilo/media.css");
	head.appendChild(css);
	
	
	tamanoGrid(media);
	reverso(media);
	cargarImagenes(media)
}

function dificil(){
	modoFacil = false;
	modoMedio = false;
    modoDificil = true;
	var dificil = 32;
	var head = document.getElementsByTagName("head")[0];
	var css = document.createElement("link");
	css.setAttribute("rel","stylesheet");
	css.setAttribute("type","text/css");
	css.setAttribute("href","estilo/dificil.css");
	head.appendChild(css);
	
	tamanoGrid(dificil);
	reverso(dificil);
	cargarImagenes(dificil)
}




function reverso(tamano){
	rev = ["reverso/reverso.png"];
	var vol = document.getElementsByClassName("reverso");
	for(var i = 0 ; i < tamano*2 ; i++){
		var img = document.createElement("img");
		img.setAttribute("src",rev[0]);
		img.setAttribute("width","146px");
		vol[i].appendChild(img);	
	}
}

function tamanoGrid(tamano){
	var grid = tamano * 2;
	var gridContainer = document.getElementById("grid-container");
	
	for(var i = 0; i < grid ;i++){
		var divHijo = document.createElement("div");
		var divCarta = document.createElement("div");
		var divReverso = document.createElement("div");
		gridContainer.appendChild(divHijo);
		divHijo.appendChild(divReverso);
		divHijo.appendChild(divCarta);
		
		divHijo.setAttribute("class","grid-item");
		divCarta.setAttribute("class","carta");
		divReverso.setAttribute("class","reverso");
	}
}

function cargarImagenes(tamano) {
	puntos = 0;
	grid = 0;
	arrayPadre = [];
	array = [];
	imagenes = [];
	imagenes[0] = "pokemon/cyndaquil.jpg";
	imagenes[1] = "pokemon/horsea.png";
	imagenes[2] = "pokemon/seel.png";
	imagenes[3] = "pokemon/onix.png"
	imagenes[4] = "pokemon/pikachu.png";
	imagenes[5] = "pokemon/zapdos.png";
	imagenes[6] = "pokemon/weezing.jpg";
	imagenes[7] = "pokemon/pichu.png";
	imagenes[8] = "pokemon/aerodactyl.png";
	imagenes[9] = "pokemon/arcanine.png";
	imagenes[10] = "pokemon/banette.png";
	imagenes[11] = "pokemon/blastoise.jpg";
	imagenes[12] = "pokemon/buterfree.jpg"
	imagenes[13] = "pokemon/charizard.png";
	imagenes[14] = "pokemon/ditto.png";
	imagenes[15] = "pokemon/eevee.png";
	imagenes[16] = "pokemon/jynx.png";
	imagenes[17] = "pokemon/mew.jpg";
	imagenes[18] = "pokemon/weedle.png";
	imagenes[19] = "pokemon/wailmer.png";
	imagenes[20] = "pokemon/voltorb.png";
	imagenes[21] = "pokemon/venomoth.jpg";
	imagenes[22] = "pokemon/vaporeon.png"
	imagenes[23] = "pokemon/squirtle.png";
	imagenes[24] = "pokemon/tauros.png";
	imagenes[25] = "pokemon/snorlax.png";
	imagenes[26] = "pokemon/slowbro.png";
	imagenes[27] = "pokemon/shinx.jpg";
	imagenes[28] = "pokemon/rhydon.png";
	imagenes[29] = "pokemon/psyduck.png";
	imagenes[30] = "pokemon/persian.png";
	imagenes[31] = "pokemon/meowth.png"
	
	
	var pokemon = document.getElementsByClassName("carta");
	var gridItem = document.getElementsByClassName("grid-item");
	for(var x = 0;x < 2;x++){
		generadorRandom(imagenes,tamano);
		for(var i = 0;i < tamano;i++){
			var img = document.createElement("img");
			img.setAttribute("src",imagenes[i]);
			img.setAttribute("width","146px");
			pokemon[grid].appendChild(img);
			desbloquearClick()
			grid++;
		}
	}
}


function comprobar(){
	//Agregamos la src del img a una array, si los 2 elementos del array tienen la misma src se suma un punto
	var puntuacion = document.getElementById("puntos");
	arrayPadre.push(this);
	this.removeEventListener("click",comprobar);
	var hijoCarta = this.lastChild;
	var hijoReverso = this.firstChild;
	var img = hijoCarta.firstChild;
	this.style.transform = "rotatey(180deg)";
	array.push(img);
	if(array.length == 2){
		//bloqueamos los demas addeventlistener
		bloquearClick();
		
		var carta1 = array[0].src;
		var carta2 = array[1].src;
		//Comprueba que la url de los 2 elementos sean iguales
		if(carta1 == carta2){
			desbloquearClick();
			puntos = puntos + 10;
			puntuacion.innerHTML=puntos;
			array = [];
			arrayPadre = [];
			ganar();
			
		}
		//En caso contrario se le vacia el array
		else{
			setTimeout(function(){ arrayPadre[0].style.transform = "rotatey(0deg)";
				arrayPadre[1].style.transform = "rotatey(0deg)";
				desbloquearClick();
				array = []
				arrayPadre=[];
			}, 2000);	
		}
	}
	

}


function bloquearClick(){
	var grid = document.getElementsByClassName("grid-item");
	for(var i = 0; i < grid.length; i++){
		grid[i].removeEventListener("click",comprobar);
	}
	
}

function desbloquearClick(){
	var grid = document.getElementsByClassName("grid-item");
	for(var i = 0; i < grid.length; i++){
		grid[i].addEventListener("click",comprobar);
	}
}

function generadorRandom(array,tamano){
	//Desordena la array
	var m = tamano, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

function borrarTodo(){
	var node = document.getElementById("grid-container");
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	var puntuacion = document.getElementById("puntos");
	puntuacion.innerHTML=0;
	
}

function ganar(){
	var puntuacion = document.getElementById("puntos").innerHTML;
	if(puntuacion == 80 && modoFacil == true){
		alert("Has ganado en el modo dificultad facil");
		parar();
		datos();	
	}
	if(puntuacion == 180 && modoMedio == true){
		alert("Has ganado en el modo de dificultad medio");
		parar();
		datos();
	}
	if(puntuacion == 320 && modoDificil == true){
		alert("Has ganado en el modo de dificultad dificil");
		parar();
		datos();
	}
}

function datos(){
	var puntos = document.getElementById("puntos").innerHTML;
	var horas = document.getElementById("Horas").innerHTML;
	var minutos = document.getElementById("Minutos").innerHTML;
	var segundos = document.getElementById("Segundos").innerHTML;
	var centecimas = document.getElementById("Centesimas").innerHTML;
	var tiempo = horas+minutos+segundos+centecimas;
	var nombre = prompt("Ponga su nombre porfavor:", "");
	var fecha = fechaHoy();
	var datos = "Nombre: "+nombre +" /Puntos: "+puntos+" /Tiempo: "+tiempo+" /Fecha: "+fecha;
	setStorage(datos);

}












