// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 3:Leer 10 números e imprimir cuantos son positivos,
// cuantos negativos y cuantos neutros.
function ejercicio3() {
	var num = new Number();
	var i = new Number();
	var conteo_positivos = new Number();
	var conteo_negativos = new Number();
	var conteo_neutros = new Number();
	conteo_positivos = 0;
	conteo_negativos = 0;
	conteo_neutros = 0;
	for (i=1;i<=10;i++) {
		document.write(i,".Digite un numero: ",'<BR/>');
		num = Number(prompt());
		if (num==0) {
			conteo_neutros = conteo_neutros+1;
		} else {
			if (num>0) {
				conteo_positivos = conteo_positivos+1;
			} else {
				conteo_negativos = conteo_negativos+1;
			}
		}
	}
	document.write("La cantidad de positivos es: ",conteo_positivos,'<BR/>');
	document.write("La cantidad de negativos es: ",conteo_negativos,'<BR/>');
	document.write("La cantidad de neutroses: ",conteo_neutros,'<BR/>');
}

