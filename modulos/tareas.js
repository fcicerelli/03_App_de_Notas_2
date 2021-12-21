//   AUTOR: CICERELLI FABIO ANDRES 
//   COMISION: 7

let fs = require("fs");

module.exports = moduloTareas = {
  
  leerJSON: () => {
    let listaDeTareas = fs.readFileSync("./dataBase/tareas.json", "utf-8");
    return JSON.parse(listaDeTareas);
  },
  
  escribirJSON: (arrayDeTareas) => {
    newArray = JSON.stringify(arrayDeTareas);
    fs.writeFileSync('./dataBase/tareas.json', newArray, 'utf-8');
  },
  
  guardarTarea : (nuevaTarea) => {
    let tareasJson = moduloTareas.leerJSON();
    tareasJson.push(nuevaTarea);
    moduloTareas.escribirJSON(tareasJson);
  },
  
  leerPorEstado: (estado) => {
    let tareas = moduloTareas.leerJSON();
    let tareasFiltradas = tareas.filter(t => {return t.estado.toLowerCase() === estado.toLowerCase()});
    return tareasFiltradas;
  },
};
