/**
 * 
 * @param id identificacion tienda
 * @param idTipo tipo de tienda 
 * @param nombre nombre de la tienda
 * @param pos ubicacion
 * @param horario horario
 * @param telefono telefono
 */
var Tienda = function (idTipo, nombre, pos, horario, telefono, id, pwd) {
    this.id = id;
    this.idTipo = idTipo;
    this.nombre = nombre;
    this.pos = pos;
    this.horario = horario;
    this.telefono = telefono;
    this.productos = [];
    this.pwd = pwd;
}


/**
 * 
 * @param producto Producto para agregar a la tienda
 */
Tienda.prototype.addProducto = function (producto) {
    this.productos.push(producto);
}

/**
 * 
 * @param store tienda a comaprar
 */
Tienda.prototype.buscarTienda = function (store){
    if(store.id && store.pwd && this.id === store.id && 
        this.pwd === store.pwd){
            return true;
    }else{
        return false;
    }
}

/**
 * 
 * @param  store tienda a ser comparada
 */
Tienda.prototype.equals = function (store) {
	if (this.id === store.id && this.pwd === store.pwd)
		return true;
	return false;
}
