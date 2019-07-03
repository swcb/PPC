const express = require('express')
const Auth = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const tokenString = 'C@n4ri0Rosã1'
const emailChange = 'email@valid.here'
const passEmailChange = 'passHere'

// POST /auth/login
// body: {"login": "string", "email": "string", "senha": "string"}
// 200:   | 500: Erro
const authentication = async (req, res) => {
console.log("exec: authentication")

return res.send("OK")
}

module.exports = {
    authentication
}