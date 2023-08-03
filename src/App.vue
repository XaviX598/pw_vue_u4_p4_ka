<template>
  <!-- <div class="consultar">
    <h3>Consultar el estudiante por la cedula</h3>
    <ConsultaEstudiante/>
  </div>
  <div class="guardar">
    <h3>Guardar estudiante</h3>
    <GuardarEstudiante/>
  </div>
  <div class="actualizar">
    <h3>Actualizar Estudiante</h3>
    <ActualizarEstudiante/>
  </div>
  <div class="eliminar">
    <h3>Eliminar estudiante</h3>
    <EliminarEstudiante/>
  </div> -->
  <NavBar/>
<router-view/> 
</template>

<script>
import NavBar from './modules/estudiante/components/NavBar.vue';
export default {
  name: 'App',
  components: {
    // ConsultaEstudiante,
    // GuardarEstudiante,
    // ActualizarEstudiante, 
    // EliminarEstudiante
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .guardar, .consultar, .actualizar, .eliminar{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 500px;
  padding-bottom: 15px;
  border: solid 3px black;
  width: 50%;
} */
</style>
