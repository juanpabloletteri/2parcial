function Enunciado() {

    var pagina = "./enunciado.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        async: true
    })
    .done(function (grilla) {

        $("#divGrilla").html(grilla);

        var pagina = "./puntaje.php";

        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "html",
            async: true
        })
        .done(function (grilla) {

            $("#divAbm").html(grilla);

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function MostrarGrilla() {

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "MOSTRAR_GRILLA"
        },
        async: true
    })
    .done(function (html) {

        $("#divGrilla").html(html);
        
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function CargarFormUsuario() {

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "FORM"
        },
        async: true
    })
    .done(function (html) {

        $("#divAbm").html(html);
        $('#cboPerfiles > option[value="usuario"]').attr('selected', 'selected');
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function AgregarUsuario() {

    var pagina = "./administracion.php";

    var nombre = $("#txtNombre").val();
    var email = $("#txtEmail").val();
    var pass = $("#txtPassword").val();
    var perfil = $("#cboPerfiles").val();


    $.ajax({
        type: 'POST',
        url: pagina,
        //dataType: "json",
        data: {
            queMuestro: "ALTA_USUARIO",
            nombre: nombre,
            email:email,
            pass:pass,
            perfil:perfil
        },
        async: true
    })
    .done(function (objJson) {

        /*if (!objJson.Exito) {
            alert(objJson.Mensaje);
            return;
        }

        alert(objJson.Mensaje);

        $("#divAbm").html("");*/
        MostrarGrilla();

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function EditarUsuario(obj) {//#sin case

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "FORM",
            usuario: obj
        },
        async: true
    })
    .done(function (html) {

        $("#divAbm").html(html);

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function ModificarUsuario(id) {//#3a

    if (!confirm("Modificar USUARIO?")) {
        return;
    }

    var pagina = "./administracion.php";

    var nombre = $("#txtNombre").val();
    var email = $("#txtEmail").val();
    var pass = $("#txtPassword").val();
    var perfil = $("#cboPerfiles").val();


    $.ajax({
        type: 'POST',
        url: pagina,
        //dataType: "json",
        data: {
            queMuestro: "MODIFICAR_USUARIO",
            nombre: nombre,
            email:email,
            pass:pass,
            perfil:perfil,
            id:id
        },
        async: true
    })
    .done(function (objJson) {

        /*if (!objJson.Exito) {
            alert(objJson.Mensaje);
            return;
        }

        alert(objJson.Mensaje);

        $("#divAbm").html("");*/
        MostrarGrilla();

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}

function MostrarUsuario(id) {//#3a

    if (!confirm("Modificar USUARIO?")) {
        return;
    }

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        //dataType: "json",
        data: {
            queMuestro: "TRAER_USUARIO",
            id: id,
        },
        async: true
    })
    .done(function (usuario) {

        $("#divAbm").html(usuario);
        $('#cboPerfiles > option[value="usuario"]').attr('selected', 'selected');

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}

function EliminarUsuario(id) {//#3b

    if (!confirm("Eliminar USUARIO?")) {
        return;
    }

    var pagina = "./administracion.php";
/*
    var id = $("#hdnIdUsuario").val();
    var foto = $("#hdnFotoSubir").val();

    var usuario = {};
    usuario.id = id;*/

    $.ajax({
        type: 'POST',
        url: pagina,
        //dataType: "json",
        data: {
            queMuestro: "ELIMINAR_USUARIO",
            id: id
        },
        async: true
    })
    .done(function (objJson) {

        if (!objJson.Exito) {
            alert(objJson.Mensaje);
            return;
        }

        alert(objJson.Mensaje);

        $("#divAbm").html("");
        MostrarGrilla();

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function Logout() {//#5

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "LOGOUT"
        },
        async: true
    })
    .done(function (html) {

        window.location.href = "login.php?uss=1";

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function traerCdsConWS(){
    
//implementar...

}
