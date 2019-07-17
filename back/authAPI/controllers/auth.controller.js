const express = require('express')
const Auth = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const tokenString = 'C@n4ri0Rosã1'
const emailChange = 'email@valid.here'
const passEmailChange = 'passHere'


// POST /auth/create'
// body: {"login": String, "email": String, "senha": String, "idUser": String}
// 201: new Auth  | 500: Erro
const createAuth = async (req, res) => {
    console.log("exec: createAuth")

    //verificação de entrada

    const newAuth = new Auth(req.body);
    await newAuth.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newAuth);
    })
}

// put /auth/login
// body: {"loginEmail": String, "senha": String}
// 200: logado + <token>    | 404: Usuário não encontrado| 
// 401: Senha errada        | 500: Erro
const authentication = async (req, res) => {
    console.log("exec: authentication")
    //verificação de entrada
    const auth = await Auth.findOne({
        $or:[
            {'login': req.body.loginEmail}, 
            {'email': req.body.loginEmail}
        ]})
        .catch((err) => {return res.status(500).send(err)})

    if(!auth) return res.status(404).send("Usuário não encontrado.")

    if(auth.senha != req.body.senha) return res.status(401).send("Senha inválida.")

    const {permissao, ultimoLogin, idUser} = auth
    const payload = {'permissao': permissao,'ultimoLogin': ultimoLogin, 'idUser': idUser}

    const JWT_Token = jwt.sign(payload, tokenString)

    //<rotina para armazenar ultimo login>

    auth.tokenLogin = JWT_Token
    await Auth.updateOne({'_id': auth._id}, auth)

    return res.status(200).send({token: JWT_Token})
}

// POST /auth/recuperar
// params: {"login": String, "email": String}
// 200:   | 500: Erro
const recuperarSenha = async (req, res) => {
    console.log("exec: recuperarSenha")

    return res.send("OK")
}

// PUT /auth/alterarsenha/:token
// body:{"senhaAntiga": String, "senhaNova": String}
// params: {"token": String}
// 200:   | 500: Erro
const alterarSenha = async (req, res) => {
    console.log("exec: alterarSenha")

    return res.send("OK")
}

// PUT /auth/updateauth/:id
// body: {"login": String, "email": String, "senha": String, "idUser": String}
// 200:   | 500: Erro
const updateAuth = async (req, res) => {
    console.log("exec: alterarSenha")

    return res.send("OK")
}

// POST /auth/verifica
// header: {"token": String, "permissao": Number}
// 200:   | 500: Erro
const verificaPermissao = async (req, res) => {
    console.log("exec: verificaPermissao")

    return res.send("OK")
}

// PUT /auth/alterarpermissao/:id
// body:{"novaPermissao": Number, "admSenha": String}
// header: {"admToken": String}
// 200:   | 500: Erro
const alterarPermissao = async (req, res) => {
    console.log("exec: alterarPermissao")

    return res.send("OK")
}

// Recebe um token, e retorna o payload.
// Sucess: return {"sucess": true, "payload": {<payload here>}}
// Err: return {"sucess": false, "err": err}
const decodifica = async (token) => {
    console.log("exec: decodifica")

    return ("OK")
}

// Recebe o conteudo do payload e retorna um token.
// Sucess: return {"sucess": true, "token": String}
// Err: return {"sucess": false, "err": err}
const gerarToken = async (payloadContent) => {
    console.log("exec: gerarToken")

    return ("OK")
}

module.exports = {
    createAuth,
    authentication,
    recuperarSenha,
    alterarSenha,
    verificaPermissao,
    updateAuth,
    alterarPermissao
}