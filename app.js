//   AUTOR: CICERELLI FABIO ANDRES 
//   COMISION: 7

let moduloTareas = require("./modulos/tareas");
let process = require("process");
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

switch (comando) {
  
  case "listar":
    let tareas = moduloTareas.leerJSON();
    if (tareas.length === 0) {
      console.log("La lista de tareas esta vacia");
    } else {
      console.log("-----------------------------------");
      console.log("Este es tu listado de tareas");
      console.log("-----------------------------------");
      tareas.forEach(element => console.log("Titulo: " + element.titulo + " - estado: " + element.estado));
    }

    break;
  
  case 'crear': {
      let tarea = process.argv[3] ? process.argv[3].toLowerCase() : undefined;
      let nuevaTarea = {
        titulo : tarea,
        estado : 'pendiente',
    }
      moduloTareas.guardarTarea(nuevaTarea);
    }
    break;
  
  case "filtrar":
    let estado = process.argv[3].toLowerCase();
    let tareasFiltradas = moduloTareas.leerPorEstado(estado);
    if (tareasFiltradas.length === 0) {
      console.log("La lista de tareas esta vacia");
    } else {
      console.log("-----------------------------------");
      console.log("Este es tu listado de tareas");
      console.log("-----------------------------------");
      tareasFiltradas.forEach(tareas =>{
        console.log(
          "Titulo: " + tareas.titulo + " - estado: " + tareas.estado
        );
      });
    }
    break;

  case undefined:
    console.log("Atención - tienes que pasar una acción ");
    break;

  default:
    console.log("No entiendo qué quieres hacer ");
    break;
}
