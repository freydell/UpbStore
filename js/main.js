var session;
var productos = [];

var homeProductos;
var homeTiendas;

var productosStock = [
    {
        "id": "0",
        "nombre": "Cuarderno",
        "descripcion": "Cuaderno rayado/cuadriculado/blanco 100 hojas",
        "precio": 1200
    },
    {
        "id": "1",
        "nombre": "Lapicero",
        "descripcion": "Lapicero negro/rojo/azul tinta mojada",
        "precio": 1500
    },
    {
        "id": "2",
        "nombre": "Carpeta",
        "descripcion": "Carpeta multiusos carta",
        "precio": 1000
    },
    {
        "id": "3",
        "nombre": "Borrador",
        "descripcion": "Borrador de nata negro",
        "precio": 700
    }
]


window.onload = function () {
    init();
    loadProductosData();
}


function init() {
    homeProductos = document.getElementById("contentProductos");
    homeTiendas = document.getElementById("contentTiendas");
    var homeproductosTab = document.getElementById("home_productos");
    homeproductosTab.style.backgroundColor = "#6495ed";
    session = new Session();
    session.addStore(new Tienda(0, "DiegoStore", "bloque 9", "6:00 - 16:00", "3007219643", "0132", "1020304050"));
    session.addStore(new Tienda(0, "FreydellStore", "bloque 6", "10:00 - 18:00", "3007219013", "0131", "1020304050"));
    session.addStore(new Tienda(0, "pachoStore", "bloque 11", "8:00 - 12:00", "3014619013", "0134", "1020304050"));

    productos = createProductos();

    var homeTiendasTab = document.getElementById("home_vendedores");
    homeTiendasTab.addEventListener("click", function () {
        homeTiendasTab.style.backgroundColor = "#6495ed";
        homeproductosTab.style.backgroundColor = "white";
        homeProductos.classList.remove("show");
        homeProductos.classList.add("hide");

        homeTiendas.classList.remove("hide");
        homeTiendas.classList.add("show");

        session.stores.forEach((store) => {
            var toIntroduce = document.getElementById("contentTiendas");
            var divRestProfileContainer = document.createElement("div");
            divRestProfileContainer.classList.add("studentShopsContainer");
            var divRestImgContainer = document.createElement("div");
            divRestImgContainer.classList.add("resultImgContainer");
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            var labelPos = document.createElement("label");
            var labelhorario = document.createElement("label");
            var labelTelefono = document.createElement("label");

            h1.classList.add("searchProfileName");
            h1.textContent = store.nombre;

            labelPos.classList.add("searchUserPos");
            labelPos.textContent = store.pos;

            labelhorario.classList.add("searchUserHorario");
            labelhorario.textContent = store.horario;

            labelTelefono.classList.add("searchUserTel");
            labelTelefono.textContent = store.telefono;

            img.classList.add("resultProfile");
            img.src = "./img/avatar.png";
            divRestImgContainer.appendChild(img);
            divRestProfileContainer.appendChild(divRestImgContainer);
            divRestProfileContainer.appendChild(h1);
            divRestProfileContainer.appendChild(labelPos);
            divRestProfileContainer.appendChild(labelhorario);
            divRestProfileContainer.appendChild(labelTelefono);
            toIntroduce.appendChild(divRestProfileContainer);
        })

    });
}

function createProductos() {
    var newProductos = [];
    productosStock.forEach((item) => {
        newProductos.push(new Producto(item.id, item.nombre, item.precio, item.descripcion));
    });
    return newProductos;
}

function loadProductosData() {
    var content = document.getElementById("contentProductos");
    productos.forEach((item) => {
        var div = document.createElement("div");
        div.classList.add("producContent");
        var contrast = document.createElement("div");
        contrast.classList.add("contraste");
        var img = document.createElement("img");
        img.classList.add("imgProd");
        switch (item.id) {
            case "0":
                img.src = "./img/cuaderno.jpg";
                break;
            case "1":
                img.src = "./img/lapiceros.jpg";
                break;
            case "2":
                img.src = "./img/carpetas.jpg";
                break;
            case "3":
                img.src = "./img/borrador.jpg";
                break;
        }
        var lblNom = document.createElement("label");
        lblNom.classList.add("nombreProd");
        lblNom.textContent = item.nombre;
        var lblPre = document.createElement("label");
        lblPre.classList.add("precioProd");
        lblPre.textContent = "Precio: $" + item.precio;
        var txtAre = document.createElement("textarea");
        txtAre.classList.add("descripcionProd");
        txtAre.textContent = item.descripcion;
        div.appendChild(img);
        contrast.appendChild(lblNom);
        contrast.appendChild(txtAre);
        contrast.appendChild(lblPre);
        content.appendChild(div);
        content.appendChild(contrast);

    });

}