// Esperar a que el documento cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todos los items de la cuadrícula de ofrecimientos
    const itemsOfrecimiento = document.querySelectorAll('.servicio-item');

    itemsOfrecimiento.forEach(item => {
        item.addEventListener('click', () => {
            // Extraer el nombre del servicio (está en el span)
            const nombreServicio = item.querySelector('span').innerText;
            
            // Extraer el precio (está en el div overlay-precio)
            const precioServicio = item.querySelector('.overlay-precio').innerText;

            // Llamar a la función agregarAlCarrito (la que definimos anteriormente)
            // Esta función ya tiene la lógica del límite de 4 y el punto rojo
            agregarAlCarrito(nombreServicio, precioServicio);
            
            // Efecto visual de "pulsado" para que el usuario sepa que funcionó
            item.style.backgroundColor = "#e2e8f0";
            setTimeout(() => {
                item.style.backgroundColor = "#f0f4f8";
            }, 100);
            
            console.log(`Agregado: ${nombreServicio} por ${precioServicio}`);
        });
    });
});