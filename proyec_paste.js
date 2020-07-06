(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){


var productoVar = document.getElementById('producto1');

var productoVar2 = document.getElementById('producto2');

var productoVar3 = document.getElementById('producto3');

var productoVar4 = document.getElementById('producto4');

//botones

var calcular = document.getElementById('btncalcular');

var pagar = document.getElementById('btnpagar');



//funciones productosDiv

productoVar.addEventListener('blur', calcularProductos);

productoVar2.addEventListener('blur', calcularProductos);

productoVar3.addEventListener('blur', calcularProductos);

productoVar4.addEventListener('blur', calcularProductos);

//funciones botones
calcular.addEventListener('click', calcularProductos);

//pagar.addEventListener('click', pagarProductos);

//divs

var resumen = document.getElementById('resumenProductos');

var pagar = document.getElementById('totalAPagar');






function calcularProductos(event){
  event.preventDefault();
  var productos1 = parseInt(productoVar.value, 10) || 0,
      productos2 = parseInt(productoVar2.value, 10) || 0,
      productos3 = parseFloat(productoVar3.value, 10) || 0,
      productos4 = Number(productoVar4.value, 10) || 0;



     if ( (productos1 < 0) + (productos2 < 0) + (productos3 < 0) + (productos4 < 0) ) {
       alert("No puedes elegir un producto en signo negativo");

     }else{
      var totalPagar = (productos1 * 250.99)
      + (productos2 * 290.50) + (productos3 * 300.00)
      + (productos4 * 450.99);

      console.log("Total a pagar: $" + totalPagar);


      pagar.innerHTML = " $" + totalPagar.toFixed(2);
      pagar.style.display = "block";


}//else




    var lista_productos = [];

    if(productos1 >= 1){
       lista_productos.push("Elegiste: " + productos1 + " Pastel 1");

    }

    if(productos2 >= 1){
   lista_productos.push("Elegiste: "+ productos2 + " Pastel 2");

   }

      if(productos3 >= 1){
        lista_productos.push("Elegiste: "+ productos3 + " Pastel 3");
      }

      if(productos4 >=1 ){
        lista_productos.push("Elegiste: "+productos4 + " Pastel 4");
      }

   else{
      console.log("Aun no agregas productos a tu Carrito");
      resumen.style.display = "block";
      var h1Element = document.createElement("H1");
      var textNoCarrito = document.createTextNode("Aun no añades productos a tu carrito");
      h1Element.appendChild(textNoCarrito);
      h1Element.setAttribute('class', 'pagarProductos');
      resumen.innerHTML += h1Element;
    }


    console.log(lista_productos);




    resumen.innerHTML = '';


  for (var i = 0; i < lista_productos.length; i++){


              resumen.style.display = "block";
          resumen.setAttribute('class', 'pagarProductos');
          resumen.innerHTML += lista_productos[i] + "<br/>" + "<br/>";

      }

  }




  });
})();
