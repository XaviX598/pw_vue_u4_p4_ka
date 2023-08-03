import axios from "axios";

//------------------------- CONSULTAR -------------------------------

export const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPIAxios(cedula);
};

const obtenerEstudianteAPI = async (cedula) => {
  console.log("AXIOS");
  //const data // si tiene un retorn
  const data = await fetch(
    `http://localhost:8080/API/V1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());

  console.log(data);
  return data;
};

const obtenerEstudianteAPIAxios = (cedula) => {
  console.log("Axios 2");
  const data = axios
    .get(`http://localhost:8080/API/V1.0/Matricula/estudiantes/${cedula}`)
    .then((r) => r.data); //axios ya tiene implicito await asi que no hace falta ponerlo
  console.log(data);
  return data;
};

//------------------------- INGRESAR -------------------------------

export const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
};

const ingresarEstudiante = (bodyEstudiante) => {
  axios
    .post(
      `http://localhost:8080/API/V1.0/Matricula/estudiantes`,
      bodyEstudiante
    )
    .then((r) => r.data); //el segundo argumento es la data que es el body
};

//------------------------- ACTUALIZAR -------------------------------

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante, id);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  axios
    .put(
      `http://localhost:8080/API/V1.0/Matricula/estudiantes/${id}`,
      bodyEstudiante
    )
    .then((r) => r.data);
};

//------------------------- ELIMINAR -------------------------------

export const eliminarEstudianteFachada = (id) => {
  
  eliminarEstudiante(id);
};

const eliminarEstudiante = (id) => {
  const data = axios.get(`http://localhost:8080/API/V1.0/Matricula/estudiantes/${cedula}`).then((r) => r.data); //axios ya tiene implicito await asi que no hace falta ponerlo
  
  axios
    .delete(`http://localhost:8080/API/V1.0/Matricula/estudiantes/${id}`)
    .then((r) => r.data);
};

// para exportar se usaba export default pero eso es para solo una cosa update delete y asi la idea es que sea para todo entonces
// se usa lo siguiente
// export default eliminarEstudianteFachada; asi seria con cada uno
//se pone export en cada uno para ya no realizar esto
