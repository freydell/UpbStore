/**
 * 
 * @param id numero de serie del producto
 * @param nombre nombre del producto
 * @param precio precio del producto
 * @param descripcion descripcion del producto
 */
var Producto = function (id, nombre, precio, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
}

/**
 * 
 * @param id numero de serie del producto
 * @param nombre nombre del producto
 * @param precio precio del producto
 * @param descripcion descripcion
 */
Producto.prototype.modificarProducto = function (id, nombre, precio, descripcion) {
    this.id = (null != id) ? id : this.id;
    this.nombre = (null != nombre) ? nombre : this.nombre;
    this.precio = (null != precio) ? precio : this.precio;
    this.descripcion = (null != descripcion) ? descripcion : this.descripcion;

}