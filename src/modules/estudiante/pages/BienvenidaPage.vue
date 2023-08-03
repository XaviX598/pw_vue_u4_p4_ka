<template>
    <div class="principal">
        <div class="bienvenida">
            <h2>Servicio estudiantil</h2>
            <div class="descripcion">
                <h4>Nuestra plataforma de gestión de estudiantes es una herramienta completa y segura que permite agregar,
                    consultar, actualizar y eliminar datos de estudiantes de manera eficiente. Ofrecemos una interfaz
                    intuitiva,
                    búsqueda avanzada, registros de cambios, integraciones y máxima privacidad para ayudar a instituciones
                    educativas a administrar y mantener información estudiantil de forma organizada y protegida.</h4>
            </div>
        </div>
        <div class="imagenE">
            <img src="../store/universidad.png" alt="no se ve">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* body {
    height: 660px;
    width: 1300px;
    
} */
.principal {
    display: flex;
    /* margin-left: 10px; */
    margin-right: 40px;
    margin-top: -80px;
}

.imagenE {
    height: 500px;
    margin-top: 200px;
}

.bienvenida {
    color: #5d40a5;
    width: 60%;
    margin-top: 150px;
    margin-right: 50px;
    margin-left: 50px;
    font-size: 40px;
    font-weight: bold;
}



h4 {
    color: black;
    text-align: justify;
}

/* body {
    background: rgb(51, 71, 104);
    background: linear-gradient(0deg, rgba(51, 71, 104, 1) 15%, rgba(25, 28, 67, 1) 50%, rgba(94, 120, 153, 1) 87%);
} */</style>