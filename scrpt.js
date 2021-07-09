let inicio = document.getElementById("inicio");
let comienzo = document.getElementById("comienzo"); 

let sobreMi = document.getElementById("sobreMi");
let medio = document.getElementById("medio")

let contacto = document.getElementById("contacto");
let footer = document.getElementById("footer");

inicio.addEventListener("click", irComienzo, false);
function irComienzo (e) {
    comienzo.scrollIntoView ({behavior: "smooth"});
}

sobreMi.addEventListener("click", irMedio, false);
function irMedio (e) {
    medio.scrollIntoView ({behavior: "smooth"});
}

contacto.addEventListener("click", bajarAContacto, false);
function bajarAContacto (e) {
    footer.scrollIntoView ({behavior: "smooth"});
}


let github = document.getElementById("github");
let mail = document.getElementById("mail");
let instagram = document.getElementById("instagram");

const configuracion_ventana = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

github.addEventListener("click", abrirGithab)
function abrirGithab() {
    github = window.open("https://github.com/GeroAlu", "github.com", configuracion_ventana);
}

mail.addEventListener("click", abrirMail)
function abrirMail() {
    mail = window.open("mailto:geronimoalu@hotmail.com?", "mail.com", configuracion_ventana);
}

instagram.addEventListener("click", abrirInstagram)
function abrirInstagram() {
    instagram = window.open("https://www.instagram.com/gero_alu/", "instagram.com/gero_alu", configuracion_ventana);
}