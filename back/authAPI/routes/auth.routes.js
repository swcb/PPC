const express = require('express');
const controller = require('../controllers/auth.controller');

module.exports = (authRouter) => {
console.log('exec: authRoutes');

    authRouter.route('/create')
        .post(controller.createAuth);
    authRouter.route('/login')
        .put(controller.authentication);
    authRouter.route('/recuperar')
        .post(controller.recuperarSenha);
    authRouter.route('/alterarsenha/:token')
        .put(controller.alterarSenha);
    authRouter.route('/updateauth/:id')
        .put(controller.updateAuth);
    authRouter.route('/verifica')
        .post(controller.verificaPermissao);
    authRouter.route('/alterarpermissao/:id')
        .put(controller.alterarPermissao);

    return authRouter;
}; 