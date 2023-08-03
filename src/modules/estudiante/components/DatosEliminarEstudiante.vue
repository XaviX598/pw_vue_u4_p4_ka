<template>
    <div class="eliminar">
        <h3>Ingrese los datos del estudiante que desea ELIMINAR</h3>
        <div class="id">
            <label for="">Id</label>
            <input v-model="id" type="text" />
        </div>
    </div>
    <button @click="eliminarEstudiante">Eliminar</button>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            id: null
        }
    },
    methods: {
        async eliminarEstudiante() {
            eliminarEstudianteFachada(this.id);
        }
    }
}
</script>

<style>
.eliminar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-display: bold;
}


.id {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 20px;
}

button {
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
}
</style>