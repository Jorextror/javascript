// --- SLIDER ----
$(document).ready(function(){
    $('.slider').bxSlider();
});
// ---- menu ----
$(document).ready(function() {
    // anar al principi
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".titol").offset().top
        }, 500);
    });
    //funcion menu(ocultar/mostrar)
    $("#reloj").hide();
    $("#regis").hide();
    $("#quizs").hide();

    $("#posts").click(function(){
        $('#post').show();
        $("#reloj").hide();
        $("#regis").hide();
        $("#quizs").hide();
    });

    $("#rellotje").click(function(){
        $('#reloj').show();
        $("#post").hide();
        $("#regis").hide();
        $("#quizs").hide();
    });

    $("#registre").click(function(){
        $('#regis').show();
        $("#post").hide();
        $("#reloj").hide();
        $("#quizs").hide();
    });

    $("#quiz").click(function(){
        $('#quizs').show();
        $("#post").hide();
        $("#regis").hide();
        $("#reloj").hide();
    });
});

// --------- API ----------
var usuaris = [];
fetch("https://api.publicapis.org/entries")
    .then(data => data.json())
    .then(data => {
        usuaris = data.entries;
        i=0
        var lista=""
        lista=lista + "<table>"
        usuaris.forEach(user => {
            lista = lista +"\n"+"<tr>"
            
            lista = lista +"\n"+"<td>"+user.API+"</td>"

            lista = lista +"\n"+"<td>"+user.Category+"</td>"    

            lista = lista +"\n"+"<td>"+user.Description+"</td>"

            lista = lista +"\n"+"<td><a href='"+user.Link+"'>"+user.Link+"</a></td>"

            lista = lista +"\n"+"</tr>"
            i=i+1
            if (i==15) {
                lista=lista + "</table>"
                document.getElementById("api").innerHTML=lista
            }
        });
        

    });

// ------ REGISTRAR -------
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// const genere = document.getElementById('genere');//Home, Dona, no binari.validarà que només arriba 1 d’aquestes opcions
// const data = document.getElementById('data');//amb un datepicker, amb jquery-ui, no permetre anys futurs

//las expreciones regulares de los inputs necesarios
const expresiones = {
    nom: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 .;]$/,//\u00f1 y \u00d1 == ñ y Ñ
    cognom: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 .;]$/,
    email: /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/
}
//booleans de todos los campos
const campos = {
    nom: false,
    cognom: false,
    email: false,
    genere: false,
    data: false
}

//comprueba cual input fue para validar
const validarFormulario = (e) => {
    console.log("a");
    switch (e.target.name) {
        case "nom":
            validarCampo(expresiones.nom, e.target, 'nom');
        break;
        case "cognom":
            validarCampo(expresiones.cognom, e.target, 'cognom');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
    }
}

//valida dependiendo del input 
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
		document.getElementById(campo).innerHTML('');
        campos[campo] = true;
    } else {
        document.getElementById(campo).innerHTML(`incorecte ${campo}`);
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', () =>{
        console.log("leva");
    
    });
    //validarFormulario);//llama la funcion al levantar la tecla
    //input.addEventListener('blur', validarFormulario);//llama la funcion al deseleccionar el campo
});

//al enviar actuara
//-------- da error al addEventListener y deja de funcionar todo lo que viene del quiz
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();//bloquea el enviar hasta que este terminado el registro
//     if(campos.nom && campos.cognom && campos.email && campos.genere && campos.data){
//         document.getElementById('resultat').innerHTML('Registrat corectamente');
//     } else {
//         document.getElementById('resultat').innerHTML('Error al registrarse');
//     }
// });

// ------- QUIZ --------
var correctes=[];
var quiz = [];
fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple")
    .then(data => data.json())
    .then(data => {
        quiz = data.results;
        console.log(quiz);
        // console.log(quiz.incorrect_answers);
        var qz=""
        i=0
        qz=qz + "<form action=''>"
        quiz.forEach(qq => {
            qz=qz+"\n"
            qz = qz +"\n"+"<h2>Pregunta "+(i+1)+"</h2>"
            qz = qz +"\n"

            qz=qz+"\n"
            qz = qz +"\n"+"<h2>"+qq.question+"</h2>"
            qz = qz +"\n"

            // var answer=qq.incorrect_answers;
            // answer.push(qq.correct_answer);
            // correctes.push(qq.correct_answer);
            // answer = Math.floor(Math.random() * answer.length);
            // for(var respostas in answer){
            //     qz=qz+ "\n"+"<input type='radio' id='"+answer[respostas]+"' name='"+answer[respostas]+"' value='"+answer[respostas]+"'>"
            //     qz=qz+ "\n"+" <label for='"+answer[respostas]+"'>"+answer[respostas]+"</label>"

            // }
            qz=qz+ "\n"+"<input type='radio' id='"+qq.correct_answer+"' name='"+qq.correct_answer+"' value='"+qq.correct_answer+"'>"
            qz=qz+ "\n"+" <label for='"+qq.correct_answer+"'>"+qq.correct_answer+"</label>"


            i=i+1
        });
        qz=qz+ "<br>\n"+" <input type='submit' value='Avaluar'> "
        qz=qz + "</form>"
        document.getElementById("quizs").innerHTML=qz
    });