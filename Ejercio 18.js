// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejerciocio 4: Un profesor prepara tres cuestionarios para una evaluación final:
// A, B Y C. Se sabe que se tarda 5 minutos en revisar el cuestonario A,
// 8 en revisar el cuestonario B y 6 en el C. La cantidad de examenes de cada 
// tipo se entran por teclado. ¿Cuantas horas y cuantos minutos se tardará en 
// revisar todas las evaluaciones?
function ejercio4() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestonario A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("Digite la cantidad de cuestonario B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("Digite la cantidad de cuestonario C: ",'<BR/>');
	cantidadc = Number(prompt());
	// Calcular los minutos que se tardara por cada cuestonario
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// Calculamos el tiempo total que le toma revisar todos los cuestonarios
	tiempo_total = tiempoa+tiempob+tiempoc;
	// Calaculamos las horas y minutos
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("Se tardara ",horas,"horas y ",minutos,"minutos",'<BR/>');
}

