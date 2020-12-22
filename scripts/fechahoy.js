function fechaHoy(){
	var f = new Date();
	var fecha = f.getDate()+"-"+(f.getMonth() +1)+"-"+f.getFullYear();
	return fecha;
}
