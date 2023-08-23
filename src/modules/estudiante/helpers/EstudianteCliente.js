import axios from "axios";

//------------------------- CONSULTAR -------------------------------

export const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPIAxios(cedula);
};

const obtenerEstudianteAPI = async (cedula) => {
  console.log("AXIOS");
  //const data // si tiene un retorn
  const data = await fetch(
    `http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());

  console.log(data);
  return data;
};

const obtenerEstudianteAPIAxios = (cedula) => {
  //en el config vamos a enviar todos los datos de cabecera
  const headers={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYYXZpZXIiLCJpYXQiOjE2OTI3NTA5NDcsImV4cCI6MTY5Mjc1MTg0N30.l8b4QRQGL6wBX1WQKzTx-KkchoMrJjCbTkXbnXa5HTG-4Pv7pTZ4u3zGGbissOtqrB87QBL63y_topvnA2YxGg",
    "Mensaje": "Valor1"
  }
  console.log("Axios 2");
  const data = axios
    .get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`, {headers: headers})
    .then((r) => r.data); //axios ya tiene implicito await asi que no hace falta ponerlo
  console.log(data);
  return data;
};

//------------------------- INGRESAR -------------------------------

export const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
};

const ingresarEstudiante = (bodyEstudiante) => {
  const headers={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYYXZpZXIiLCJpYXQiOjE2OTI3NTAyMTgsImV4cCI6MTY5Mjc2MDIxOH0.1qqqzlGbQuJWaezC669G-HJtBBeSO6OUvdcZF4s8hgEZCyKdmvqRbObbvWU0JPwwBBh1Li_i6czJsoRdgya4Wg",
    "Mensaje": "Valor1"
  }
  axios
    .post(
      `http://localhost:8081/API/V1.0/Matricula/estudiantes`,
      bodyEstudiante, {headers: headers}
    )
    .then((r) => r.data); //el segundo argumento es la data que es el body

  console.log("usuario ingresado");
};

//------------------------- ACTUALIZAR -------------------------------

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante, id);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  const headers={
    "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYYXZpZXIiLCJpYXQiOjE2OTI3NTAyMTgsImV4cCI6MTY5Mjc2MDIxOH0.1qqqzlGbQuJWaezC669G-HJtBBeSO6OUvdcZF4s8hgEZCyKdmvqRbObbvWU0JPwwBBh1Li_i6czJsoRdgya4Wg",
    "Mensaje": "Valor1"
  }
  axios
    .put(
      `http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`,
      bodyEstudiante, {headers: headers}
    )
    .then((r) => r.data);
};

//------------------------- ELIMINAR -------------------------------

export const eliminarEstudianteFachada = (id) => {
  eliminarEstudiante(id);
};

const eliminarEstudiante = (id) => {
  // const data = axios.get(`http://localhost:8080/API/V1.0/Matricula/estudiantes/${cedula}`).then((r) => r.data); //axios ya tiene implicito await asi que no hace falta ponerlo
const headers={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYYXZpZXIiLCJpYXQiOjE2OTI3NTAyMTgsImV4cCI6MTY5Mjc2MDIxOH0.1qqqzlGbQuJWaezC669G-HJtBBeSO6OUvdcZF4s8hgEZCyKdmvqRbObbvWU0JPwwBBh1Li_i6czJsoRdgya4Wg",
    "Mensaje": "Valor1"
  }
  axios
    .delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, {headers: headers})
    .then((r) => r.data);
};

// para exportar se usaba export default pero eso es para solo una cosa update delete y asi la idea es que sea para todo entonces
// se usa lo siguiente
// export default eliminarEstudianteFachada; asi seria con cada uno
//se pone export en cada uno para ya no realizar esto
