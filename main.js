/*const inicio = document.querySelector('.inicio')
const alta = document.querySelector('.alta')
const datos = document.querySelector('.datos')

alta.style.display = 'none'
datos.style.display = 'none'


const altaButton = document.querySelector('#button1')
const datosButton = document.querySelector('#button2')


altaButton.addEventListener('click', () => {
    inicio.style.display = 'none'
    alta.style.display = 'block'
} )

datosButton.addEventListener('click', () => {
    inicio.style.display = 'none'
    datos.style.display = 'block'
})

const inicioButton = document.querySelector('#buttonInicio')

inicioButton.addEventListener('click', () => {
    datos.style.display = 'none' 
    inicio.style.display = 'block' 
    alta.style.display = 'none'  
})*/


//clase alumno_____________________________________________________
class Alumno{
    constructor(nombre, apellido, edad, curso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }

    obtenerDatos() {
        return `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, Edad: ${this.edad}, Curso: ${this.curso}`;
    }

    organizarGrupos(){
        const materiasAi = ("Desarrollo AI, Funciones constructoras, Control legal de la AI")
        const materiasDip = ("Nociones de analisis, Estrategias de recolección de datos, Manejo de información")
        const materiasCode = ( "Codificación, Lenguages de programación, Estructura de codigo")
        const masterAI = document.getElementById("masterAI").value;
        const dip = document.getElementById("dip").value;
        const masterCode = document.getElementById("masterCode").value;
        const grupoA = [];
        const grupoB = [];
        const grupoC = [];

        if(this.curso === masterAI){

        }

    }
    
}

// Guardar alumno en el localStorage
function guardarAlumnoEnLocalStorage(alumno) {
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

// Mostrar todos los alumnos almacenados
function mostrarAlumnos() {
    const listaAlumnos = document.getElementById('listaAlumnos');
    listaAlumnos.innerHTML = ''; // Limpiar lista existente

    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${alumno.nombre}, Apellidos: ${alumno.apellido}, Edad: ${alumno.edad}, Curso: ${alumno.curso}`;
        listaAlumnos.appendChild(li);
    });
}

function datosDealumnos (){
    const dateBase_string = localStorage.alumnos;
    const dateBase_JSON = JSON.parse(dateBase_string);

    let nombre_buscado = (document.getElementById("busquedaPornombre").value).trim();

    for(alumno_index in dateBase_JSON){
        
        if(!isNaN(alumno_index)){
            let alumno = dateBase_JSON[alumno_index];
            let nombre_a_comparar = (alumno.nombre).trim()

        if(nombre_a_comparar.toUpperCase() == nombre_buscado.toUpperCase()){
            const Almn = document.createElement("Almn");
            Almn.innerText = "Nombre: "+alumno.nombre+"\nApellidos: "+alumno.apellido+"\nEdad: "+alumno.edad+"\nCurso: "+alumno.curso;
            Almn.id = "contenedor_texto_respuesta";

        if(document.getElementById("contenedor_texto_respuesta")){
            document.getElementById("contenedor_texto_respuesta").remove();

        }
        document.getElementById("botonbusqueda").insertAdjacentElement("afterend", Almn);
        console.log("es el alumno buscado")
        break;

        }else{
            console.log("no es el alumno buscado")

        }
      }
    }
}

function alumnosgrupoA(){
    const dateBase_string = localStorage.alumnos;
    const dateBase_JSON = JSON.parse(dateBase_string);
    
    const cursoAI = ("Master en AI");
    const cursoDip = ("Diplomado en gestion de datos");
    const cursoMcode = ("Master Code");

    const materiasAi = ("Desarrollo AI, Funciones constructoras, Control legal de la AI")
    const materiasDip = ("Nociones de analisis, Estrategias de recolección de datos, Manejo de información")
    const materiasCode = ( "Codificación, Lenguages de programación, Estructura de codigo")

    const grupoA = [];


    for(alumno_index in dateBase_JSON){
     console.log(alumno_index);
        if(!isNaN(alumno_index)){

            let alumno = dateBase_JSON[alumno_index];
            let curso_a_comparar = (alumno.curso).trim();

        if(cursoAI == curso_a_comparar){
            const groupA = document.createElement("groupA");
            groupA.innerText = "Nombre: "+alumno.nombre+"\nApellidos: "+alumno.apellido+"\nEdad: "+alumno.edad+"\nMaterias: "+materiasAi;
            groupA.id = "contenedor_texto_respuesta";   
       
        if(document.getElementById("contenedor_texto_respuesta")){
            document.getElementById("contenedor_texto_respuesta").remove();
       
        }

        document.getElementById("botongrupoA").insertAdjacentElement("afterend", groupA);
        console.log("Grupo A")
        

        }else
        console.log("No hay alunos en el grupo A");
      }

    }
}

function alumnosgrupoB(){
    const dateBase_string = localStorage.alumnos;
    const dateBase_JSON = JSON.parse(dateBase_string);
    
    const cursoDip = ("Diplomado en gestion de datos");
    const cursoMcode = ("Master Code");

    const materiasDip = ("Nociones de analisis, Estrategias de recolección de datos, Manejo de información")
    const materiasCode = ( "Codificación, Lenguages de programación, Estructura de codigo")

    const grupoB = [];


    for(alumno_index in dateBase_JSON){
     console.log(alumno_index);
        if(!isNaN(alumno_index)){

            let alumno = dateBase_JSON[alumno_index];
            let curso_a_comparar = (alumno.curso).trim();

        if(cursoDip == curso_a_comparar){
            const groupB = document.createElement("groupB");
            groupB.innerText = "Nombre: "+alumno.nombre+"\nApellidos: "+alumno.apellido+"\nEdad: "+alumno.edad+"\nMaterias: "+materiasDip;
            groupB.id = "contenedor_texto_respuesta";   
       
        if(document.getElementById("contenedor_texto_respuesta")){
            document.getElementById("contenedor_texto_respuesta").remove();
       
        }

        document.getElementById("botongrupoB").insertAdjacentElement("afterend", groupB);
        console.log("Grupo B")
        

        }else
        console.log("No hay alunos en el grupo B");
      }

    }
}

function alumnosgrupoC(){
    const dateBase_string = localStorage.alumnos;
    const dateBase_JSON = JSON.parse(dateBase_string);
    
    const cursoMcode = ("Master Code");

    const materiasCode = ( "Codificación, Lenguages de programación, Estructura de codigo")

    const grupoC = [];


    for(alumno_index in dateBase_JSON){
     console.log(alumno_index);
        if(!isNaN(alumno_index)){

            let alumno = dateBase_JSON[alumno_index];
            let curso_a_comparar = (alumno.curso).trim();

        if(cursoMcode == curso_a_comparar){
            const groupC = document.createElement("groupC");
            groupC.innerText = "Nombre: "+alumno.nombre+"\nApellidos: "+alumno.apellido+"\nEdad: "+alumno.edad+"\nMaterias: "+materiasCode;
            groupC.id = "contenedor_texto_respuesta";   
       
        if(document.getElementById("contenedor_texto_respuesta")){
            document.getElementById("contenedor_texto_respuesta").remove();
       
        }

        document.getElementById("botongrupoC").insertAdjacentElement("afterend", groupC);
        console.log("Grupo C")
        

        }else
        console.log("No hay alunos en el grupo C");
      }

    }
}
    

// Manejar el formulario de agregar alumno
document.getElementById('alumnoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const curso = document.getElementById('curso').value;

    const alumno = new Alumno(nombre, apellidos, edad, curso);
    guardarAlumnoEnLocalStorage(alumno);

    // Limpiar el formulario
    document.getElementById('alumnoForm').reset();

    // Mostrar los alumnos actualizados
    mostrarAlumnos();
});

/*document.getElementById('BuscarAlumno').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreBusqueda = document.getElementById('busquedaPornombre').value.toLowerCase();
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

    // Filtrar alumnos por nombre
    const resultados = alumnos.filter(alumno => alumno.nombre.toLowerCase().includes(nombreBusqueda));

    // Mostrar resultados
    mostrarAlumnos(resultados);
});*/

// Mostrar alumnos al cargar la página
window.addEventListener('load', mostrarAlumnos);



/*//funciones
let baseDatos = [];

function guardarAlumnoEnLocalStorage(alumno) {
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

// Mostrar todos los alumnos almacenados
function mostrarAlumnos() {
    const listaAlumnos = document.getElementById('listaAlumnos');
    listaAlumnos.innerHTML = ''; // Limpiar lista existente

    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${alumno.nombre}, Apellidos: ${alumno.apellido}, Edad: ${alumno.edad}, Curso: ${alumno.curso}`;
        listaAlumnos.appendChild(li);
    });
    }


document.getElementById('alumnForm').addEventListener('sumbit', function (event){
    event.preventDefault();

    const dateNombre = document.getElementById('nombre').value;
    const dateApellido = document.getElementById('apellidos').value;
    const dateEdad = document.getElementById('edad').value;
    const dateCurso = document.getElementById('curso').value;

    const alumno = new Alumno(dateNombre,dateApellido,dateEdad,dateCurso);
    guardarAlumnoEnLocalStorage(alumno);

    //limpiar form
    document.getElementById('alumnForm').reset();

    //Mostrar alumnos
    mostrarAlumnos();
})
   //Mostrar alumnos al cargar pag
   window.addEventListener('load',mostrarAlumnos)


/*document.getElementById('buttonGuardar').addEventListener('click', function (){
    const dateNombre = document.getElementById('nombre').value;
    const dateApellido = document.getElementById('apellido').value;
    const dateEdad = document.getElementById('edad').value;
    const dateCurso = document.getElementById('curso').value;
    const materiasAi = ["Desarrollo AI, Funciones constructoras, Control legal de la AI"]
    const materiasDip = ("Nociones de analisis, Estrategias de recolección de datos, Manejo de información")
    const materiasCode = ( "Codificación, Lenguages de programación, Estructura de codigo")
    const calificaciones = [100, 80, 90, 75];
    const nuevo = new Alumno(dateNombre, dateApellido, dateEdad, dateCurso, materiasAi, calificaciones);
    baseDatos.push(nuevo);
    guardarLocalstorage(nuevo);

    document.getElementById('alumnoForm').reset();
    

    if(dateNombre && dateApellido && dateEdad && dateCurso && materiasAi && calificaciones){
        const tabla = document.getElementById('tablaAlumnos').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();
        const celdaNombre = nuevaFila.insertCell(0);
        const celdaApellido = nuevaFila.insertCell(1);
        const celdaEdad = nuevaFila.insertCell(2);
        const celdaCurso = nuevaFila.insertCell(3);
        const celdaMaterias = nuevaFila.insertCell(4);
        const celdaCalificaciones = nuevaFila.insertCell(5);

        celdaNombre.textContent = dateNombre;
        celdaApellido.textContent = dateApellido;
        celdaEdad.textContent = dateEdad;
        celdaCurso.textContent = dateCurso;
        celdaMaterias.textContent = materiasAi;
        celdaCalificaciones.textContent = calificaciones;
    }

    window.addEventListener('load', mostrarAlumnos);
   
})

/*function loginName(){
    let escribirNombre = prompt("Escriba el nombre del alumno");
    
    if(escribirNombre === baseDatos[0]){
    alert(baseDatos)
}else{
    alert("No se encontro el nombre")
} }*/


/*let datoStorage = baseDatos;

function guardarLocalstorage(){
    localStorage.setItem("Datos", JSON.stringify(datoStorage));
    datoStorage = JSON.parse(localStorage.getItem("Datos"));
}*/


/*function  altaAlumno(){
   
    let dateNombre = document.getElementById("nombre").value;
    let dateApellido = document.getElementById("apellido").value;
    let dateEdad = document.getElementById("edad").value;
    let dateCurso = document.getElementById("curso").value;
    const nuevoAlumno = new Alumno(dateNombre,dateApellido,dateEdad,dateCurso)
    baseDatos.push(nuevoAlumno)
    console.log(baseDatos)
}*/


