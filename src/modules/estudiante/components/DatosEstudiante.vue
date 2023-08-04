<template>
    <div class="consultar">
        <h3>Ingrese los datos del estudiante que desea CONSULTAR</h3>
        <div class="ingresar">
            <input class="inputCedula" v-model="cedula" type="text" placeholder="Ingrese el numero de cedula..." />
            <button @click="consultarEstudiante">Consultar</button>
        </div>
        <div class="nombre">
            <label for="">Nombre: </label>
            <input v-model="nombre" type="text" />
        </div>
        <div class="apellido">
            <label for="">Apellido: </label>
            <input v-model="apellido" type="text" />
        </div>
        <div class="fecha">
            <label for="">Fecha de nacimiento: </label>
            <input v-model="fechaNacimiento" type="text" />
        </div>
        <div class="provincia">
            <label for="">Provincia: </label>
            <input v-model="provincia" type="text" />
        </div>
    </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js" //mediante llvaes especificamos los metodos a importar
export default {
    data() {
        return {
            cedula: this.$route.params.cedula,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            provincia: null

        }
    },
    methods: {
        async consultarEstudiante(cedula) {
            const data = await obtenerEstudianteFachada(cedula);
            this.nombre = data.nombre
            this.apellido = data.apellido
            this.fechaNacimiento = data.fechaNacimiento
            this.provincia = data.provincia
            // console.log(data)
        }
    },
    mounted() {
        //esto es en la programacion
        //pathvariable
        // http://localhost:8081/....../estudiante/{cedula}
        // http://localhost:8081/....../estudiante/:cedula
        const { cedula } = this.$route.params;
        console.log(cedula)
        this.consultarEstudiante(cedula)
        //requestParam
        // http://localhost:8081/....../estudiante?provincia=pichincha&ciudad=quito
        // http://localhost:8081/#/consultar/1724441041?provincia=pichincha
        
        console.log(this.$route)
        //para obtener un dato
        const provin= this.$route.query.provincia
        const { provincia } = this.$route.params;
        console.log(provincia)
    }
}
</script>

<style scoped>
.consultar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    font-size: large;
    font-display: bold;
    padding: 20px 0px;
}

.ingresar,
.nombre,
.apellido,
.fecha,
.provincia {
    display: flex;
    flex-direction: column;
    width: 300px;
}

.nombre,
.apellido,
.fecha,
.provincia {
    margin-top: 40px;
}

button {
    cursor: pointer;
    margin-top: 20px;
    padding: 20px 0px;
    font-size: large;
    background-color: black;
    color: white;
    border: rgb(245, 198, 198) solid 2px;
}

button:hover {
    cursor: pointer;
    margin-top: 20px;
    padding: 20px 0px;
    font-size: large;
    background-color: rgb(245, 198, 198);
    color: black;
    border: black solid 2px;
}

.inputCedula {
    font-size: large;
    /* width: 388px; */
}</style>