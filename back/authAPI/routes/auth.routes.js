const express = require('express');
const controller = require('../controllers/auth.controller');

module.exports = (authRouter) => {
console.log('exec: authRoutes');

    authRouter.route('/auth/create')
        .post(controller.createAuth);
    authRouter.route('/auth/login')
        .post(controller.authentication);
    authRouter.route('/auth/recuperar')
        .post(controller.recuperarSenha);
    authRouter.route('/auth/alterarsenha/:token')
        .put(controller.alterarSenha);
    authRouter.route('/auth/updateauth/:id')
        .put(controller.updateAuth);
    authRouter.route('/auth/verifica')
        .post(controller.verificaPermissao);
    authRouter.route('/auth/alterarpermissao/:id')
        .put(controller.alterarPermissao);

    return authRouter;
}; 