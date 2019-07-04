const express = require('express')
const User = require('../models/user.model')

//  GET /getusers
//  200: Retorna todos os users     | 500: Erro
const getUsers = async (req, res) => {
console.log("exec: getUsers")

    await User.find()
        .then((users) => {
            return res.status(200).send(users)
        })
        .catch((err) => {
            return res.status(500).send(err)
        })
}

//  GET /getuser/:id
//  200: Retorna o user     | 500: Erro
const getUser = async (req, res) => {
console.log("exec: getUser")

    await User.findById(req.params.id)
        .then((user) => {
            return res.status(200).send(user)
        })
        .catch((err) => {
            return res.status(500).send(err)
        })
}

// POST /createuser
// body: "dadosPessoais":{"nome": "string", "email": "string", "login": "string"}
// 201: Criado  | 500: Erro
const createUser = async (req, res) => {
console.log("exec: createUser")

    // <validação do body>

    const newUser = new User(req.body);

    await newUser.save((err) => {
        if (err) return res.status(500).send(err);
        //cria auth
        return res.status(201).send(newUser);
    })
}

//  PUT /updateuser/:id
//  body: "dadosPessoais":{"nome": "string", "email": "string", "login": "string"}
//  200: Deletado     | 500: Erro
const updateUser = async (req, res) => {
console.log("exec: updateUser")
    
    // <validação do body>

    User.updateOne({"_id": req.params.id}, req.body)
        .then(() => {
            return res.status(200).send("Atualizado")
        })
        .catch((err) => {
            return res.status(500).send(err)
        })
}

//  DELETE /deleteuser/:id
//  200: Deletado     | 500: Erro
const deleteUser = async (req, res) => {
console.log("exec: deleteUsers")
    
    User.deleteMany({"_id": req.params.id})
        .then(() => {
            return res.status(200).send("Deletado")
        })
        .catch((err) => {
            return res.status(500).send(err)
        })
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}