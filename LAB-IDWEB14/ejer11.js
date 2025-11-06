class Producto {
    #precio;
    #stock;
    #nombre;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }
    venta(cantidad) {
        if (cantidad>this.#stock) {
            console.log("No se pudo realizar la venta, no hay stock suficiente");
            return;
        }
        this.#stock-=cantidad;
        console.log("Se realizo la venta correctamente");
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get nombre() {return this.#nombre;}
    set precio(precio) {
        if (precio<0) {
            console.log("No se coloco el precio, el argumento debe de ser positivo");
            return; 
        }
        this.#precio = precio;
    }
    get precio() {return "$"+parseFloat(this.#precio).toFixed(2);}
    set stock(cantidad) {
        if (cantidad<0) {
            console.log("No se coloco el stock, el argumento debe de ser positivo");
            return;
        }
        this.#stock = cantidad;
    }
    get stock() {return this.#stock;}
}

const fideo = new Producto("Fideo", 2.4, 100);
console.log(fideo.stock);
fideo.venta(101);
console.log(fideo.stock);
fideo.venta(90);
console.log(fideo.stock);
console.log(fideo.precio);
fideo.precio = -12; 
console.log(fideo.precio);
fideo.precio = 2;
console.log(fideo.precio);
console.log(fideo.stock);
fideo.stock = (-23);
console.log(fideo.stock);
fideo.stock = (1000);
console.log(fideo.stock);