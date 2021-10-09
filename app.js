const agregar = document.getElementById('agregar');
const tareas = document.getElementById('tareas');
const tarea = document.getElementById('tarea');

let todo = [];
document.addEventListener("DOMContentLoaded", function() {
    cargarLocalStorage();
});



function cargarLocalStorage() {
    let guardado = localStorage.getItem('tareas');
    todo = JSON.parse(guardado) || [];
    mostrar();
}

function guardarLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(todo));
}






agregar.addEventListener('click', (e) => {
    e.preventDefault();
    const tareaNueva = tarea.value;
    todo.push(tareaNueva);
    guardarLocalStorage();
    mostrar();
    tarea.value = '';

});
const mostrar = () => {
    let html = '';
    todo.forEach((tarea) => {
        html += `
        <div class="item">
            <div class="tarea">
    
                <p>${tarea}</p>
    
    
            </div>
            <button onclick="eliminar('${tarea}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        //console.log(tarea);
    });
    tareas.innerHTML = html;
}
const eliminar = (tarea) => {

    const index = todo.findIndex(t => t === tarea);
    todo.splice(index, 1);
    guardarLocalStorage();
    mostrar();

}