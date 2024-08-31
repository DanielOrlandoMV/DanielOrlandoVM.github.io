document.getElementById("jubilacionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura de datos del formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;

    const nit = document.getElementById("nit").value;
    const dpi = document.getElementById("dpi").value;
    const entidadGobierno = document.getElementById("entidadGobierno").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const cantidadAniosLaborados = parseInt(document.getElementById("cantidadAniosLaborados").value);
    const direccion = document.getElementById("direccion").value;
    const sueldo1 = parseFloat(document.getElementById("sueldoAnio1").value);
    const sueldo2 = parseFloat(document.getElementById("sueldoAnio2").value);
    const sueldo3 = parseFloat(document.getElementById("sueldoAnio3").value);


    // Cálculo del sueldo promedio
    const sueldoPromedio = (sueldo1 + sueldo2 + sueldo3) / 3;

    // Cálculo de la jubilación según las condiciones
    const porcentajeAnual = 0.02; // 2% por año de aporte
    
    // Porcentaje total por todos los años de aporte
    const porcentajeTotal = porcentajeAnual * cantidadAniosLaborados;

     // Fórmula de jubilación 
    const totalJubilacion = sueldoPromedio * porcentajeTotal;


window.location.href = `resultado.html?nombreCompleto=${encodeURIComponent(nombreCompleto)}&nit=${encodeURIComponent(nit)}&dpi=${encodeURIComponent(dpi)}&entidadGobierno=${encodeURIComponent(entidadGobierno)}
&fechaNacimiento=${encodeURIComponent(fechaNacimiento)}&cantidadAniosLaborados=${encodeURIComponent(cantidadAniosLaborados)}&direccion=${encodeURIComponent(direccion)}&sueldoAnio1=${encodeURIComponent(sueldo1)}
&sueldoAnio2=${encodeURIComponent(sueldo2)}&sueldoAnio3=${encodeURIComponent(sueldo3)}&totalJubilacion=${totalJubilacion}`;

});
