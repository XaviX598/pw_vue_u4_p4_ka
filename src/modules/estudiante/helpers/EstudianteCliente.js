import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
    return await obtenerEstudianteAPI(cedula);
};

const obtenerEstudianteAPI = async (cedula) => {
  //const data // si tiene un retorn
    const data = await fetch(
    `localhost:8080/API/V1.0/Matricula/estudiantes/${cedula}`
    ).then((r) => r.json());

    console.log(data);
};

const obtenerEstudianteAPIAxios = (cedula) => {};

export const ingresarEstudianteFachada = (bodyEstudiante) => {};

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {};

export const eliminarEstudianteFachada = (id) => {};

// para exportar se usaba export default pero eso es para solo una cosa update delete y asi la idea es que sea para todo entonces
// se usa lo siguiente
// export default eliminarEstudianteFachada; asi seria con cada uno
//se pone export en cada uno para ya no realizar esto
