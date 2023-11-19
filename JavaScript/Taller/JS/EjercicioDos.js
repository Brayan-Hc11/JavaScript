/*------------------------------------*/ 
/* INICIALIAMOS LAS VARIABLES */ 
/*------------------------------------*/ 

alert('Las notas ingresadas al sistema deben estar en el rango de 10 y 100 Para pasar se necesita 70 o superior');

// variable de la edad
let nota1 = parseFloat(prompt('Señor usuario, por favor a continuación ingrese su primera nota: '));
let nota2 = parseFloat(prompt('Señor usuario, por favor a continuación ingrese su segunda nota: '));
let nota3 = parseFloat(prompt('Señor usuario, por favor a continuación ingrese su tercera nota: ')); 
let nota4 = parseFloat(prompt('Señor usuario, por favor a continuación ingrese su Cuarta nota: '));
let nota5 = parseFloat(prompt('Señor usuario, por favor a continuación ingrese su Quinta nota: '));

// Varable de promedio
let Promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

/*-----------------------------------------------------*/ 
/* INICIALIAMOS LA SENTENCIA CONDICIONAL */ 
/*-----------------------------------------------------*/ 
switch (true) {

    case Promedio < 70:
        document.querySelector('.Contenido__Parrafo').innerHTML = `${Promedio}, el resultado obtenido es menor al resultado requerido`;
        alert('Lo lamentamos, su promedio ha sido inferior a lo requerido');
        break;

    case Promedio === 70:
        document.querySelector('.Contenido__Parrafo').innerHTML = `${Promedio}, el resultado obtenido es igual al resultado requerido`;
        alert('Felicidades, su promedio de notas cumple con lo requerido.');
        break;

    case Promedio > 70:
        document.querySelector('.Contenido__Parrafo').innerHTML = `${Promedio}, el resultado obtenido es mayor al resultado requerido`;
        alert('Felicidades, su promedio de notas cumple con lo requerido.');
        break;

    default:
        alert('Por favor ingrese notas validas');
}