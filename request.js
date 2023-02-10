"use strick";  

fetch("http://localhost:3000/")
    .then(res=> res.json())
    .then(res=> {
                res.forEach(elemento=> {
                    console.log(elemento.nombre)
                })
    }) 