/**
 * contructor de sesion
 */
var Session = function () {
	this.stores = [];
	this.activeStore;
}
/**
 * Funcion para verificar conexion
 */
Session.prototype.loggedIn = function () {
	return (null != this.activeStore) ? true : false;
}
/**
* Funcion para cerrar la sesion
*/
Session.prototype.logout = function () {
	this.activeStore = null;
}
/**
 * 
 * @param id Usuario
 * @param pw contraseña
 */
Session.prototype.login = function (id, pw) {
    var store = this.buscarTienda(null, null, null, null, null, id, pwd);
    if (store.length != 1)
        return false;
    this.activeStore = store[0];
    return true;
}

/**
 * 
 * @param  store 
 * @return true cuando sea exitoso
 */
Session.prototype.addStore = function (store) {
	if (null == store)
		return false;
	for (var i = 0; i < this.stores.length; i++)
		if (this.stores[i].equals(store))
			return false;
	this.stores.push(store);
	return true;
}

/**
 * 
 * @param store perfil tienda a buscar
 * @return lista con la referencia del perfil
 */
Session.prototype.searchStores = function (store) {
	var matches = [];
	for (var i = 0; i < this.stores.length; i++)
		if (this.stores[i].buscarTienda(store))
			matches.push(this.stores[i]);
	return matches;
}

Session.prototype.buscarTienda = function (idTipo, nombre, pos, horario, telefono, id, pwd) {
	return this.searchStores(new Tienda(email, name, birthday, biography, loginId, loginPw, gender, image));
}