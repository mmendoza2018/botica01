// login funcion enviar datos
const enviar = () => {
    user = $("#usuario").val();
    pass = $("#pass").val();

    let val = (/[!$%&/?¡'¨*¿:_;]/gi).test(user);
    if (user === "" || pass === "") {
        return Swal.fire({
            icon: 'error',
            title: 'por favor ingrese los campos obligatorios'
        })
    } else if (val === true) {
        return Swal.fire({
            icon: 'error',
            title: 'por favor ingrese caracteres validos'
        })

    }
    let datos = "user=" + user + "&pass=" + pass;
    $.ajax({
        type: "POST",
        url: "php/procesos/login.php",
        data: datos,
        success: function (respuesta) {

            if (respuesta === "1") {
                location.href = "menu.php";

            } else if (respuesta === "2") {
                Swal.fire({
                    icon: 'error',
                    title: 'usuario y/o contraseña no validos'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'usuario y/o contraseña no validos'
                })

            }

        }
    });
}

//-------------------------------usuario----------------------------------------------

// envio datos de formulario de agrega usuario 
// usu_u,dir_u,num_u,nom_u,con_u

const agregar_usuario = () => {
    if ($("#usu_u").val() === "") {
        //$("#id_usu_ag").css( "border-color","red");
        $("#usu_u").addClass("is-invalid");
        $("#alert_u01").text("ingrese campos validos")
        setTimeout(() => {
            $("#usu_u").removeClass("is-invalid");
            $("#alert_u01").hide();
        }, 2500);

    } else if ($("#dir_u").val() === "") {
        $("#dir_u").addClass("is-invalid");
        $("#alert_u02").text("ingrese campos validos")
        setTimeout(() => {
            $("#dir_u").removeClass("is-invalid");
            $("#alert_u02").hide();
        }, 2000);
    } else if ($("#num_u").val() === "" || isNaN($("#num_u").val()) == true) {
        $("#num_u").addClass("is-invalid");
        $("#alert_u03").text("ingrese campos validos")
        setTimeout(() => {
            $("#num_u").removeClass("is-invalid");
            $("#alert_u03").hide();
        }, 2000);
    } else if ($("#s_u2").val() === null) {
        $("#s_u2").addClass("is-invalid");
        setTimeout(() => {
            $("#s_u2").removeClass("is-invalid");
        }, 2000);
    } else if ($("#nom_u").val() === "") {
        $("#nom_u").addClass("is-invalid");
        $("#alert_u04").text("ingrese campos validos")
        setTimeout(() => {
            $("#nom_u").removeClass("is-invalid");
            $("#alert_u04").hide();
        }, 2000);
    } else if ($("#con_u").val() === "") {
        $("#con_u").addClass("is-invalid");
        $("#alert_u05").text("ingrese campos validos")
        setTimeout(() => {
            $("#con_u").removeClass("is-invalid");
            $("#alert_u05").hide();
        }, 2000);
    } else {

        let d = $("#form_agrega_usuario").serialize(event);
        event.preventDefault();
        $.ajax({
            url: 'php/procesos/usuario/agrega_usuario.php',
            type: 'POST',
            data: d,
            success: function (a) {
                if (a === "1") {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'se guardo con exito !',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#form_agrega_usuario")[0].reset();
                    $("#llega_tabla_usuario").load("php/procesos/usuario/vista_tabla.php");
                }

            }
        });


    }



};


// envio datos de formulario de actualiza usuario 

const actualiza_usuario = () => {
    let arr2 = $(".validar_usuario_ac");
    let control = true;
    if (arr2.length > 0) {
        for (i = 0; i < arr2.length; i++) {
            if (arr2[i].value === '' || arr2[i].value === null) {

                alert("Faltan campos por llenar"); //o el mensaje para todos

                control = false;
                break;
            }
        }
    }

    if (control === true) {

        let z = $("#form_actualiza_usuario").serialize(event);
        event.preventDefault();
        Swal.fire({
            title: 'Estas seguro de actualizar?',
            text: "esto influira directamente en la base de datos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, estoy seguro!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: 'php/procesos/usuario/actualiza_usuario.php',
                    type: 'POST',
                    data: z,
                    success: function (a) {

                        // $("#form_actualiza_cot")[0].reset();

                        if (a == "1") {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Actualizado correctamente !',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            $("#llega_tabla_usuario").load("php/procesos/usuario/vista_tabla.php");

                        }

                    }

                });
            };
        });
    }

};

// llenar modal usuario
const llenar_usuario = (d) => {
    let a = [];
    a = d.split("|");

    $("#nom_usu_ac").val(a[0])
    $("#telf_usu_ac").val(a[1])
    $("#dir_usu_ac").val(a[2])
    $("#tipo_usu_ac").val(a[3])
    $("#id_usu_ac").val(a[4])
    $("#estado_usu_ac").val(a[5])

};

//-------------------------------usuario----------------------------------------------


// envio de datos para agregar

const agregar_proveedor = () => {
    //alert($("#s_u").val())
    //nom_pro,dir_pro,num_pro,numd_pro,
    if ($("#nom_pro").val() === "") {
        //$("#id_usu_ag").css( "border-color","red");
        $("#nom_pro").addClass("is-invalid");
        $("#alert01").text("ingrese campos validos")
        setTimeout(() => {
            $("#nom_pro").removeClass("is-invalid");
            $("#alert01").hide();
        }, 2500);

    } else if ($("#dir_pro").val() === "") {
        $("#dir_pro").addClass("is-invalid");
        $("#alert02").text("ingrese campos validos")
        setTimeout(() => {
            $("#dir_pro").removeClass("is-invalid");
            $("#alert02").hide();
        }, 2000);
    } else if ($("#num_pro").val() === "" || isNaN($("#num_pro").val()) == true) {
        $("#num_pro").addClass("is-invalid");
        $("#alert03").text("ingrese campos validos")
        setTimeout(() => {
            $("#num_pro").removeClass("is-invalid");
            $("#alert03").hide();
        }, 2000);
    } else if ($("#s_u").val() === null) {
        $("#s_u").addClass("is-invalid");
        setTimeout(() => {
            $("#s_u").removeClass("is-invalid");

        }, 2000);
    } else if ($("#numd_pro").val() === "" || isNaN($("#numd_pro").val()) == true) {
        $("#numd_pro").addClass("is-invalid");
        $("#alert04").text("ingrese campos validos")
        setTimeout(() => {
            $("#numd_pro").removeClass("is-invalid");
            $("#alert04").hide();
        }, 2000);
    } else {
        let f = $("#form_agrega_prov").serialize(event);
        event.preventDefault();
        $.ajax({
            url: 'php/procesos/proveedor/agrega_proveedor.php',
            type: 'POST',
            data: f,
            success: function (a) {
                if (a === "1") {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'se guardo con exito !',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#form_agrega_prov")[0].reset();
                    $("#llega_tabla_proveedor").load("php/procesos/proveedor/vista_tabla.php");
                }

            }
        });
    }
}


// validar_proveedor_ag,form_agrega_prov,php/procesos/proveedor/agrega_proveedor.php

// envio de datos para actualizar
const actualizar = () => {

    id = $("#id_pro").val();
    nombre = $("#nombre_pro").val();
    dir = $("#direccion_pro").val();
    telf = $("#telefono_pro").val();
    tipo_doc = $("#tipodoc_pro").val();
    num = $("#numerodoc_pro").val();
    estado = $("#estado_pro").val();

    // id_pro,nombre_pro,direccion_pro,telefono_pro,tipodoc_pro,numerodoc_pro,estado_pro

    var ruta = "id=" + id +
        "&nombre=" + nombre +
        "&dir=" + dir +
        "&telf=" + telf +
        "&tipo_doc=" + tipo_doc +
        "&num=" + num +
        "&estado=" + estado;
    Swal.fire({
        title: 'Estas seguro de actualizar?',
        text: "esto influira directamente en la base de datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, estoy seguro!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                type: "POST",
                url: "php/procesos/proveedor/actualiza_proveedor.php",
                data: ruta,
                success: function (callese) {
                    //alerttify.correcto(response);
                    if (callese === "1") {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Actualizado correctamente !',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        $("#llega_tabla_proveedor").load("php/procesos/proveedor/vista_tabla.php")
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'hubo un error  !',
                            showConfirmButton: false,
                            timer: 2000
                        })

                    }

                }
            })
        }
    })
}

// funcion para llenar compos
const llenar_prov = (d) => {
    let x = [];
    x = d.split("|");
    $("#id_pro").val(x[0])
    $("#nombre_pro").val(x[1])
    $("#direccion_pro").val(x[3])
    $("#telefono_pro").val(x[2])
    $("#numerodoc_pro").val(x[4])
    $("#tipodoc_pro").val(x[5])
    $("#estado_pro").val(x[6])
    // id_pro,nombre_pro,telefono_pro,direccion_pro,numerodoc_pro,tipodoc_pro,estado_pro
};


//--------------------------------------------------funciones load----------------------------------------------------

$(document).ready(function () {
    $("#modales").load("vistas/modales.html");
});

$(document).ready(function () {
    $("#llega_tabla_proveedor").load("php/procesos/proveedor/vista_tabla.php")
});


$(document).ready(function () {
    $("#llega_tabla_usuario").load("php/procesos/usuario/vista_tabla.php")
});


//dasdsa
//--------------------------------producto------------------------------------------

var icon = `<i class="fas fa-user-edit"></i>`;


let tb_data = $('#table-products').DataTable({
    ajax: {
        url: 'php/procesos/productos/all-products.php',
        dataSrc: 'data'
    },

    columns: [{
            data: "nombre_art"
        },
        {
            data: "cantidad_art"
        },
        {
            data: "descripcion_art"
        },
        {
            data: "categoria"
        },
        {
            data: "vencimiento_art"
        },
        {
            data: "id_art",
            render: function () {
                return '<button type="button" class="btn btn-info p-1">' + icon + '</button>';
            }
        },
    ],
    "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    }

});



$('#btnAdd').click(function () {
    clearinput();
    $('#modal-title').html('Registrar producto');
    // $('#id').val('');
    // $('#name').val('');
    $('#modal-add-product').modal('show');
});


$('#btnSave').click(function () {
            nombre = $("#nombre").val();
            cantidad = $("#cantidad").val();
            precio = $("#precio").val();
            descripcion = $("#descripcion").val();
            estado = $("#estado").val();
            vencimiento = $("#vencimiento").val();

            expresion = /[0-9]+.+[0-9]/;

            /*prueba de validacion*/

            if ($("#nombre").val() === "") {
                //$("#id_usu_ag").css( "border-color","red");
                $("#nombre").addClass("is-invalid");
                $("#alert01").text("ingrese campos validos")
                setTimeout(() => {
                    $("#nombre").removeClass("is-invalid");
                    $("#alert01").hide();
                }, 2500);

            } else if ($("#cantidad").val() === "") {
                $("#cantidad").addClass("is-invalid");
                $("#alert02").text("ingrese campos validos")
                setTimeout(() => {
                    $("#cantidad").removeClass("is-invalid");
                    $("#alert02").hide();
                }, 2000);
            } else if ($("#precio").val() === "" || isNaN($("#precio").val()) == true) {
                $("#precio").addClass("is-invalid");
                $("#alert03").text("ingrese campos validos")
                setTimeout(() => {
                    $("#precio").removeClass("is-invalid");
                    $("#alert03").hide();
                }, 2000);
            } else if ($("#vencimiento").val() === "") {
                $("#vencimiento").addClass("is-invalid");
                $("#alert04").text("ingrese campos validos")
                setTimeout(() => {
                    $("#vencimiento").removeClass("is-invalid");
                    $("#alert04").hide();
                }, 2000);
            } else if ($("#descripcion").val() === "") {
                $("#descripcion").addClass("is-invalid");
                $("#alert05").text("ingrese campos validos")
                setTimeout(() => {
                    $("#descripcion").removeClass("is-invalid");
                    $("#alert05").hide();
                }, 2000);
            } else {
                let data = $('#form-add-product').serialize();
                if ($("#id").val() === null || $("#id").val() === "") {

                    $.ajax({
                        url: 'php/procesos/productos/save-product.php',
                        type: 'post',
                        data: data,
                        'success': function (response) {
                            response = JSON.parse(response);
                            if (response == true)
                                //toastr.success('Se grabó satisfactoramente');
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Se guardo con éxito',
                                    showConfirmButton: false,
                                    timer: 2000
                                })

                            else {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'hubo un error  !',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                            }
                            tb_data.ajax.reload();
                            $('#modal-add-product').modal('hide');
                        }
                    });

                } else {
                    Swal.fire({
                        title: 'Estas seguro de actualizar?',
                        text: "esto influira directamente en la base de datos!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'si, estoy seguro!',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.isConfirmed) {

                            $.ajax({
                                url: 'php/procesos/productos/save-product.php',
                                type: 'post',
                                data: data,
                                'success': function (response) {
                                    response = JSON.parse(response);
                                    if (response == true)
                                        //toastr.success('Se grabó satisfactoramente');
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Se guardo con éxito',
                                            showConfirmButton: false,
                                            timer: 2000
                                        })

                                    else {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'hubo un error  !',
                                            showConfirmButton: false,
                                            timer: 2000
                                        })
                                    }
                                    tb_data.ajax.reload();
                                    $('#modal-add-product').modal('hide');
                                }
                            });
                        }

                    })

                }


            }
        });

        /*ACTUALIZAR PRODUCTO*/

        $('body').on('click', '.edit', function () {

                clearinput();

                $('#modal-title').html('Actualizar producto');
                let data = tb_data.row($(this).parents('tr')).data();
                $('#id').val(data['id_art']);
                $('#nombre').val(data['nombre_art']);
                $('#descripcion').val(data['descripcion_art']);
                $('#categoria').val(data['id_cat']);
                $('#proveedor').val(data['id_pro01']);
                $('#cantidad').val(data['cantidad_art']);
                $('#precio').val(data['precio_art']);
                $('#estado').val(data['estado_art']);
                $('#vencimiento').val(data['vencimiento_art']);
                $('#modal-add-product').modal('show');

            }

        );



        function clearinput() {
            $('#id').val('');
            $('#nombre').val('');
            $('#descripcion').val('');
            $('#categoria').val(1);
            $('#proveedor').val(1);
            $('#vencimiento').val('');
            $('#cantidad').val('');
            $('#precio').val('');
            $('#estado').val('');
        }





        /* Llenamos los campos de tipo select */
        $.ajax({
            url: 'php/procesos/productos/all-categories.php',
            type: 'get',
            'success': function (response) {
                response = JSON.parse(response);
                let output = '';
                for (let i = 0; i < Object.keys(response).length; i++) {
                    output += `<option value="` + response[i]['id_cat'] + `">` + response[i]['nombre_cat'] + `</option>`;
                }
                $('#categoria').html(output);
            }
        });

        $.ajax({
            url: 'php/procesos/productos/all-providers.php',
            type: 'get',
            'success': function (response) {
                response = JSON.parse(response);
                let output = '';
                for (let i = 0; i < Object.keys(response).length; i++) {
                    output += `<option value="` + response[i]['id_pro'] + `">` + response[i]['nombre_pro'] + `</option>`;
                }
                $('#proveedor').html(output);
            }
        });

        function validate_data() {
            return true;
        }