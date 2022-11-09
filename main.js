addEventListener("DOMContentLoaded", (e)=>{
    let myfrom = document.querySelector("#calcularPesos");
    let pesos = 4896.56;
    myfrom.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let caculo = Number(data.dolar)*pesos;
        document.querySelector("pre").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(caculo);
    })
})