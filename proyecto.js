

// ARRAYS

// Acá se suben todos los Productos.
let todosLosProductos = [];

// OBJECTS

class Productos {
  constructor(producto) {
    this.producto = producto;
  }
}

// FUNCIONES

// Función que registra.
function registrar() {

  // Se llama a la función para publicar el primer producto y mostrarlo en consola.
  publicarProducto();
}

// Función que se utiliza para pedir el producto y transformarlo en un objeto.
function publicarProducto() {
  let producto = prompt("Ingrese su producto");

  let productos = new Productos(producto);

  let publicarMasProductos = prompt("¿Deseas comprar otro producto? Responde SOLO POR SI/NO").toLowerCase();
  tuitASumar = productos.producto; //.producto => Para que devuelva el valor del objeto.
  todosLosProductos.push(tuitASumar);

  if (publicarMasProductos == "si") {
    publicarProducto();
  } else {
    alert("No mas productos");
  }
}

// Función que elimina el último producto.
function eliminarUltimoProducto(todosLosProductos) {
  let opcionEliminar = prompt("¿Desea eliminar el último producto?");

  if (opcionEliminar == "si") {
    todosLosProductos.pop();
  }
}

function ordenarArray() {
  alert("Ahora te voy a mostrar (por consola) el array ordenado de menor a mayor / A-Z");

  // Ordenar el array 'todosLosProductos' de A-Z / 0-100.
  todosLosProductos.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  console.log(todosLosProductos);
}

// Función que da inicio al registro de usuario.
registrar();

// Llamada a la función que elimina el último producto.
eliminarUltimoProducto(todosLosProductos);

// Llamada a la función que ordena el array de menor a mayor.
ordenarArray();



// PAGO TOTAL EN COUTAS.

function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let TresCoutas = 10;
    let SeisCoutas = 20;
    let DoceCoutas = 30;
    
    if (document.getElementById("uno").checked){
        resultado = valore * TresCoutas / 100 + valore;
        alert("su pago es de " + resultado);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * SeisCoutas / 100 + valore;
        alert("su pago es de " + resultado);
    }

    else if (document.getElementById("tres").checked){
        resultado = valore * DoceCoutas / 100 + valore;
        alert("su pago es de " + resultado);
    }
    else{
        alert("tienes que completar los datos")
    }
}


