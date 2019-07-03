const express = require('express');
const controller = require('../controllers/auth.controller');

module.exports = (authRouter) => {
console.log('exec: autRoutes');

    authRouter.route('/auth/login')
        .post(controller.authentication);

    return authRouter;
}; 