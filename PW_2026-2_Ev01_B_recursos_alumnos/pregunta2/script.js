function calcular(){
    let precio_i=document.getElementById("precio").value;
    let cantidad_i=document.getElementById("canidad").value;
    let envio_i=document.getElementById("envio").value;

    if(precio_i ==0){
        alert("Precio sin valores, rellenar el valor")
    }

    if(cantidad_i==0){
        alert("Cantidad de libros insuficiente")
    }
    let subtotal = precio_i * cantidad_i;
    let total = subtotal + envio_i;

   document.getElementById("resultado").innerHTML = total;
}