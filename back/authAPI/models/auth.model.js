const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({

    login: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    idUser: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    },

    permissao: {
        type: Number,
        required: true,
        default: 0
    },

    tokenLogin: {
        type: String,
        default: ""
    },
    
    tokenRecuperar: {
        type: String,
        default: ""
    },

    ultimoLogin: {
        type: Date,
    }

});

module.exports = mongoose.model('Auth', authSchema);