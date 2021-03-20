$(document).ready(function() {
    $('#telefono').mask('000-000-0000');
});
let txtNombre = document.getElementById('txtNombre');
txtNombre.focus();

const app = new Vue({
    el: '#app',
    data: {
        titulo: "SAKE'S CONTACT BOOK",
        contactos: [],
        contactoNombre: '',
        contactoTelefono: '',
        fechaNacimiento: '',
        contactoEmail: '',
        seleccionado: false,
    },
    methods: {
        limpiar: function() {
            this.contactoNombre = '';
            this.contactoTelefono = '';
            this.fechaNacimiento = '';
            this.contactoEmail = ''
        },


        // -- AGREGAR --
        agregarContacto: function() {
            //Validaciones
            if (
                this.contactoNombre === '' ||
                this.contactoTelefono === '' ||
                this.fechaNacimiento === '' ||
                this.contactoEmail === ''

            ) {
                alert('¡Todos los campos son requeridos!');
            } else {


                this.contactos.push({
                    nombre: this.contactoNombre,
                    telefono: this.contactoTelefono,
                    date: this.fechaNacimiento,
                    email: this.contactoEmail
                });

                this.limpiar();
                localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
                let txtNombre = document.getElementById('txtNombre');
                txtNombre.focus();
            }
        },
        // -- MOSTRAR --
        mostrarContacto: function(index) {
            if (this.contactoNombre === '') {
                document.getElementById('boton-submit').disabled = true;
                this.contactos[index].seleccionado = true;
                this.contactoNombre = this.contactos[index].nombre;
                this.contactoTelefono = this.contactos[index].telefono;
                this.fechaNacimiento = this.contactos[index].date;
                this.contactoEmail = this.contactos[index].email;
            } else {
                this.editarContacto(index);
                this.contactos[index].seleccionado = false;
                document.getElementById('boton-submit').disabled = false;
            }
        },
        // -- EDITAR --
        editarContacto: function(index) {
            this.contactos[index].nombre = this.contactoNombre;
            this.contactos[index].telefono = this.contactoTelefono;
            this.contactos[index].date = this.fechaNacimiento;
            this.contactos[index].email = this.contactoEmail;

            this.btnEdicion = 'Editar';
            this.limpiar();

            localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
        },
        // -- ELIMINAR --
        eliminar: function(index) {
            this.contactos.splice(index, 1);
            localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
        },
    },
    // -- GUARDAR EN LOCAL --
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('agenda-pro'));
        console.log(datosDB);

        if (datosDB === null) {
            this.contactos = [];
        } else {
            this.contactos = datosDB;
        }
    },
});


//FRAMEWORK


var table = $('.table').DataTable();

$(document).ready(function() {
    $('.table').DataTable();


});