login.controller('loginController', function($scope){

    $scope.credenciais = {loginEmail: '', senha: '', login: '', email: '', confirmEmail: '', nome: ''}
    $scope.status = {cadastrando: false, logando: true}

    $scope.cadastrar = function () {
        $scope.status.cadastrando = true
        $scope.status.logando = false
    }
});