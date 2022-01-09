// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// // const genere = document.getElementById('genere');//Home, Dona, no binari.validarà que només arriba 1 d’aquestes opcions
// // const data = document.getElementById('data');//amb un datepicker, amb jquery-ui, no permetre anys futurs

// //las expreciones regulares de los inputs necesarios
// const expresiones = {
//     nom: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 .;]$/,//\u00f1 y \u00d1 == ñ y Ñ
//     cognom: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 .;]$/,
//     email: /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/
// }
// //booleans de todos los campos
// const campos = {
// 	nom: false,
// 	cognom: false,
// 	email: false,
// 	genere: false,
// 	data: false
// }

// //comprueba cual input fue para validar
// const validarFormulario = (e) => {
//     console.log("a");
// 	switch (e.target.name) {
// 		case "nom":
// 			validarCampo(expresiones.nom, e.target, 'nom');
// 		break;
//         case "cognom":
// 			validarCampo(expresiones.cognom, e.target, 'cognom');
// 		break;
//         case "email":
// 			validarCampo(expresiones.email, e.target, 'email');
// 		break;
//     }
// }

// //valida dependiendo del input 
// const validarCampo = (expresion, input, campo) => {
// 	if(expresion.test(input.value)){
// 		campos[campo] = true;
// 	} else {
// 		campos[campo] = false;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);//llama la funcion al levantar la tecla
//     input.addEventListener('blur', validarFormulario);//llama la funcion al deseleccionar el campo
// });

// //al enviar actuara
// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();//bloquea el enviar hasta que este terminado el registro
//     if(campos.nom && campos.cognom && campos.email && campos.genere && campos.data){
//         document.getElementById('resultat').innerHTML('Registrat corectamente');
//     } else {
//         document.getElementById('resultat').innerHTML('Error al registrarse');
//     }
// });