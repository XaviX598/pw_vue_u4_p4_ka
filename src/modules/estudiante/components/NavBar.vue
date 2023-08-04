<template>
    <div class="router">
        <!-- para poder navegar usamos el elemento routerlink y no href sino to -->
        <router-link to="/">Bienvenida</router-link>
        <router-link to="/consultar">Consultar estudiante</router-link>
        <router-link to="/ingresar">Ingresar estudiante</router-link>
        <router-link to="/actualizar">Actualizar estudiante</router-link>
        <router-link to="/eliminar">Eliminar estudiante</router-link>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #c15050;
    margin: 0 10px;
    font-size: 20px;
}

a:hover{
    color: #5d40a5;
}

.router{
    margin-top: -30px;
    margin-bottom: 20px;
    background: rgb(94, 167, 178);
    padding: 10px;
}
</style>