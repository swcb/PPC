const express = require('express');
const controller = require('../controllers/getController');

module.exports = (userRouter) => {
console.log('userRoutes Ok');
    userRouter.route('/users')
        .get(controller.getUsers);
    return userRouter;
}; 