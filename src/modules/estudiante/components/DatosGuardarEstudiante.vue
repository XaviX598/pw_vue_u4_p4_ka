<template>
    <div class="ingresar">
        <h3>Ingrese los datos del estudiante que desea INGRESAR</h3>
        <div class="cedula">
            <label for="">Cedula</label>
            <input v-model="cedula" type="text" />
        </div>
        <div class="nombre">
            <label for="">Nombre</label>
            <input v-model="nombre" type="text" />
        </div>
        <div class="apellido">
            <label for="">Apellido</label>
            <input v-model="apellido" type="text" />
        </div>
        <div class="fecha">
            <label for="">Fecha de nacimiento</label>
            <input v-model="nombre" type="text" />
        </div>
        <div class="provincia">
            <label for="">Provincia</label>
            <input v-model="apellido" type="text" />
        </div>
    </div>
    <button @click="guardarEstudiante">Guardar</button>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            provincia: null,
        }
    },
    methods: {
        async guardarEstudiante() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                //fechaNacimiento: "2003-02-05T00:00:00",
                fechaNacimiento: this.fechaNacimiento,
                provincia: this.provincia
            }
            await ingresarEstudianteFachada(data);

        }
    }
}
</script>

<style scoped>
.ingresar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-display: bold; 
}
.cedula, .nombre, .apellido, .fecha, .provincia{
display: flex;
flex-direction: column;
width: 300px;
margin-top: 20px;
}

button{
    cursor: pointer;
    margin-top: 20px;
    padding: 20px 30px;
    font-size: large;
    background-color: black;
    color: white;
    border: rgb(245, 198, 198) solid 2px;
}
button:hover{
    cursor: pointer;
    margin-top: 20px;
    padding: 20px 30px;
    font-size: large;
    background-color: rgb(245, 198, 198);
    color: black;
    border: black solid 2px;
}
</style>