class Alumno {
	constructor(nombre, email, password) {
		this.nombre = nombre;
		this.email = email;
		this.password = password;
	}
}

let arrayAlumnos =[];
let miFormulario = document.querySelector("#formulario");
let inputNombre =document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3],value;
let passwordI = formulario.children[5].value;

let contenedor = document.querySelector("#alumnoIngresado")
let displayTodos = document.querySelector("#displaytodos");
let bandera = false;

miFormulario.addEventListener("submit", agregarAlumnos);
btnMostrar.addEventListener("click", MostrarTodosAlumnos);

inputNombre.focus();

function validarform(){
 nombreI = formulario.children[1].value;
 emailI = formulario.children[3],value;
 passwordI = formulario.children[5].value;
 console.log(nombreI);
 console.log(emailI);
 console.log(passwordI);

 if (nombreI == " " || emailI == " " || passwordI == " ") {
   alert("error - debe completar todos los campos para continuar");
   inputNombre.focus();
   bandera = false;   
 }else {
  bandera = true; 
 }

}

function agregarAlumnos(e) {
	e.preventDefault();
	validarform();
	if(bandera == true) {
	  let opcion =confirm("estas seguro de agregar el alumno?");
	  if(opcion == true){
		let formulario = e.target
		arrayAlumnos.push(new Alumno(nombreI, emailI, passwordI));
	  } else{
		alert("no se agregara el usuario");
	  }

      formulario.children[1].value = " ";
      formulario.children[3],value = " ";
      formulario.children[5].value = " ";
      contenedor.innerHTML = " ";
	  AgregarAlDom();
	  inputNombre.focus(); 
	} else{
		inputNombre.focus();
	}
}

function AgregarAlDom(){
	contenedor.innerHTML = `<h3> Ultimo alumno ingresado:</h3>
	<p><strong> Nombre: </strong> ${nombreI}</p>
	<p><strong> Email:</strong ${emailI}</P>
	<p><strong> PassWord:</strong> ${passwordI}</p>
	<hr>`;
}

function MostrarTodosAlumnos(e){
	e.preventDefault();
	let i = 0;
	displayTodos.innerHTML = "<h3> Listados de todos los alumnos:</h3>";
	for (const alumno of arrayAlumnos) {
           
		displayTodos.innerHTML +=`
		<p><strong> Nombre: </strong> ${nombreI}</p>
	    <p><strong> Email:</strong ${emailI}</P>
	    <p><strong> PassWord:</strong> ${passwordI}</p>
	    <hr>`;
	}
}




