/*------------------------------------*/ 
/* INICIALIAMOS LAS VARIABLES */ 
/*------------------------------------*/ 

// variable de la edad
let Edad = prompt('Señor usuario, por favor ingrese su edad actual'); 

/*-----------------------------------------------------*/ 
/* INICIALIAMOS LA SENTENCIA CONDICIONAL */ 
/*-----------------------------------------------------*/ 
switch (true) {
    
    case Edad <18:
        document.querySelector('.Contenido__Parrafo').innerHTML = `Lo lamentamos, la edad de: ${Edad} no cumple con los requisitos.`; 
        alert('Lo lamentamos, su edad  no cumple con los requisitos. ');
        break;

    case Edad =18:
        document.querySelector('.Contenido__Parrafo').innerHTML = `Bienvenido, la edad de: ${Edad} si cumple con los requisitos`;
        alert('Bienvenido, su edad  si cumple con los requisitos. ');
        break

    default:
        document.querySelector('.Contenido__Parrafo').innerHTML = `Bienvenido, la edad de: ${Edad} si cumple con los requisitos`;
        alert('Bienvenido, su edad  si cumple con los requisitos. ');
}


