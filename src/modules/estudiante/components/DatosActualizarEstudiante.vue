<template>
    <div class="actualizar">
        <h3>Ingrese los datos del estudiante que desea ACTUALIZAR</h3>
        <div class="id">
            <label for="">Id</label>
            <input v-model="id" type="text" />
        </div>
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
            <input v-model="fechaNacimiento" type="text" />
        </div>
        <div class="provincia">
            <label for="">Provincia</label>
            <input v-model="provincia" type="text" />
        </div>
    </div>
    <button class="btn btn-link" @click="actualizarEstudiante">Actualizar</button>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js"

export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            id: null,
            fechaNacimiento: null,
            provincia: null,
        }
    },
    methods: {
        async actualizarEstudiante() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                provincia: this.provincia
            }
            await actualizarEstudianteFachada(data, this.id);

        }
    }
}
</script>

<style scoped>
.actualizar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-display: bold;
}

.cedula,
.nombre,
.apellido,
.fecha,
.provincia,
.id {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 20px;
}

/* button {
    cursor: pointer;
    margin-top: 20px;
    padding: 20px 30px;
    font-size: large;
    background-color: black;
    color: white;
    border: rgb(245, 198, 198) solid 2px;
}

button:hover {
    cursor: pointer;
    margin-top: 20px;
    padding: 20px 30px;
    font-size: large;
    background-color: rgb(245, 198, 198);
    color: black;
    border: black solid 2px;
} */
</style>