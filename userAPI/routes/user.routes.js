const express = require('express');
const controller = require('../controllers/user.controller');

module.exports = (userRouter) => {
console.log('exec: userRoutes');
    userRouter.route('/getusers')
        .get(controller.getUsers);
    userRouter.route('/getuser/:id')
        .get(controller.getUser);
    userRouter.route('/createuser')
        .post(controller.createUser);3
    userRouter.route('/updateuser/:id')
        .put(controller.updateUser);
    userRouter.route('/deleteuser/:id')
        .delete(controller.deleteUser);
        
    return userRouter;
}; 