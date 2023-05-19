// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 5: Calacular el factorial de un número 
// mayor o igual a o.
function ejercicio5() {
	var num = new Number();
	var i = new Number();
	var factorial = new Number();
	do {
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	// N! = 1 * 2 * 3 * ... *N
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	document.write("El factorial es: ",factorial,'<BR/>');
}

