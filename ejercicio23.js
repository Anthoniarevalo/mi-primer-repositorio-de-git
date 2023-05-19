// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercio 3: En un almacén se hace un 20  MOD  de descuento a los clientes 
// cuya compra supere Los $100. ¿Cual será la cantidad que pagará una 
// persona por su compra? (Diagrama N-S)
function ejercio3() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite la cantidad a pagar: ",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("El precio a pagar es: ",precio_final,'<BR/>');
}

