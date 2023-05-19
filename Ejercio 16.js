// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 2: Hacer un programa para ingresar el radio de un circulo y se 
// reporte su area y la longitud de la circunferencia.
// area = pi * radio^2
// longitud = 2 * pi * radio
function ejercicio2() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("Digite el valor del radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	document.write("El area de la circunferencia es: ",area,'<BR/>');
	document.write("La longitud es: ",lon,'<BR/>');
}

