// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 4: Suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 alumnos. Realizar un algoritmo para calcular La calificación promedio y
// la calificación más baja de todo el grupo
function ejercicio4() {
	var calificiacion_baja, calificiacion_promedio;
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,"Digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		// Suma titerativa de las calificaciones
		suma = suma+calificacion;
		// Calculamos la  menor calificacion
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("La calificacion promedio es: ",calificiacion_promedio,'<BR/>');
	document.write("La calificacion mas baja es: ",calificiacion_baja,'<BR/>');
}

