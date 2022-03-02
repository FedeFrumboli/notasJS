const input = document.querySelector('input');
const botonAgregar = document.querySelector('#botonAgregar');
const ul = document.querySelector('ul');
const sinTareas = document.querySelector('#sinTareas');

botonAgregar.addEventListener("click", (e) =>{
    e.preventDefault();
    const textoNota = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = textoNota;

    li.appendChild(p);
    li.appendChild(crearBotonBorrar());
    ul.appendChild(li);

    input.value = "";
    sinTareas.style.display = "none"
})

function crearBotonBorrar(){
    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = "X";
    botonBorrar.id = "botonBorrar";

    botonBorrar.addEventListener("click", (e)=>{
        const liPadre = e.target.parentElement;
        ul.removeChild(liPadre);

        const listaTareas = document.querySelectorAll('li');
        if (listaTareas.length === 0){
            sinTareas.style.display = "block";
        }
    });

    return botonBorrar;
}