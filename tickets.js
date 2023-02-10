"use strict";
                                //FORM
let categorias = document.querySelector(".categorias");
let cantidad = document.querySelector(".cantidad");
let canvasValor =  document.querySelector(".totalValor");

let btn_resumen = document.getElementById("btn-mostrar-total").addEventListener("click",()=>{

    categorias.value == "Estudiante" ? canvasValor.textContent= "Total a pagar: $"+cantidad.value * 40 
    : categorias.value == "Trainee"  ? canvasValor.textContent="Total a pagar: $"+cantidad.value * 100 
    : canvasValor.textContent= "Total a pagar: $"+cantidad.value * 170  ;

})

