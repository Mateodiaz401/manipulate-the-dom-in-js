//*** selectors por id
console.log(document.getElementById('cabecera'));
// *** selector clase
console.log(document.getElementsByClassName('border-grey'));

//** selector por nombre de Etiqueta
console.log(document.getElementsByTagName('li'));
//**  selector por nombre
console.log(document.getElementsByName('header'));

//** selector querySelector
console.log(document.querySelector('li'));
console.log(document.querySelector('[nombre="cabecera"]'))

//**  selector querySelctor por all
console.log(document.querySelectorAll('li'));

//**  seleccionar un elemento del dom
const elemento = document.getElementById('cabecera');

console.log(elemento.children);

console.log(elemento.parentElement);

