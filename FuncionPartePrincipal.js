function add(producto,price){
 var bod = document.getElementById("tab")
 console.log(bod)
 var tr = document.createElement("tr");

 //creando primer td
 var td0= document.createElement("td");
 var product = document.createTextNode(producto);
 tr.appendChild(td0);
 td0.appendChild(product);

 //creando primer td
 var td1 = document.createElement("td");
 var value = document.createTextNode(price);
 tr.appendChild(td1);
 td1.appendChild(value);

 bod.appendChild(tr)

 console.log(tr);

document.body.appendChild(bod)


}
function sumar(){
   alert("Sumalo tu bendito vago, como si no sabe sumar")
   event.preventDefault();
   var productos1 = parseInt(productoVar.value, 10) || 0,
       productos2 = parseInt(productoVar2.value, 10) || 0,
       productos3 = parseFloat(productoVar3.value, 10) || 0,
       productos4 = Number(productoVar4.value, 10) || 0;

}
switch (expression) {
  case expression:

    break;
  default:

}
