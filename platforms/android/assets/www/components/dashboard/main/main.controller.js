angular
    .module('vaiacontecer')
    .controller('mainController', mainController);


mainController.$inject = ['$state', 'AuthService'];


function mainController($state, AuthService) {
    var vm = this;


    /// Public Variables
    vm.newUser = {};
    vm.eventsList = [{titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}, {titulo : "Evento X"}];


    /// Public Methods
    vm.signUp = _signUp;
    vm.cancel = _cancel;
    vm.goToEventos = _goToEventos;
    vm.goToNewEvent = _goToNewEvent;


    /// Implementation

    function _goToEventos() {
        $state.go('dashboard.evento.listar');
    }

    /**
     * [goToNewEvent description]
     * @method  goToNewEvent
     * @author Trigueiro Neto
     * @version
     * @return  {[type]}     [description]
     */
    function _goToNewEvent() {
        $state.go('dashboard.evento.cadastrar')
    }

    /**
     * [signUp description]
     * @method  signUp
     * @author
     * @version
     * @return  {[type]} [description]
     */
    function _signUp() {

    }

    /**
     * [_cancel description]
     * @method  _cancel
     * @author
     * @version
     * @return  {[type]} [description]
     */
    function _cancel() {
        $state.go('login');
    }

    function _formValidation() {

    }
}
