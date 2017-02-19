angular
    .module('vaiacontecer')
    .controller('cadastroController', cadastroController);


cadastroController.$inject = ['$state', 'AuthService'];


function cadastroController($state, AuthService) {
    var vm = this;


    /// Public Variables
    vm.newUser = {};


    /// Public Methods
    vm.signUp = _signUp;
    vm.cancel = _cancel;


    /// Implementation

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