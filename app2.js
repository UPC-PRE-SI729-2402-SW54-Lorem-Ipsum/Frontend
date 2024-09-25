new Vue({
    el: '#app',
    data: {
        registered: false,
        newLawyer: {
            function: '',
            id: '',
            ciudad: '',
            certificate: null
        },
        options: [
            { text: 'Chat S/20.00', selected: false },
            { text: 'Video Llamada S/40.00', selected: false },
            { text: 'Presencial S/50.00', selected: false }
        ],
        lawyers: [
            { name: 'Lucas Aldave', function: 'Abogado de violencia familiar', image: 'images/lucas-ghersi.jpg'  },
            { name: 'GianPaul Custodio Chavarria', function: 'Abogado penal', image: 'images/jpc_3.jpg' },
            { name: 'Marcos Chenssen C.', function: 'Abogado civil', image: 'images/MARCOS-GARCÍA-MONTES_-73-copia.jpg' },
            { name: 'Christopher David Escobar Cayampi', function: 'Abogado laboral', image: 'images/Chirstopher-Cubillas.jpg' },
            { name: 'Alinet Fernandez Taipe', function: 'Abogado de familia', image: 'images/istockphoto-1587604256-612x612.jpg' }
        ]
    },
    methods: {
        toggleOption(index) {
            this.options[index].selected = !this.options[index].selected;
        },
        register() {
            this.registered = true;
        },
        onFileChange(event) {
            this.newLawyer.certificate = event.target.files[0];
        }
    }
});
