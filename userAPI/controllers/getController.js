const express = require('express');

const getUsers = async (req, res) => {
    console.log("Cheguei em getUsers, com o body:")
    console.log(req.body)
    return {"ok": "OK"}
}

module.exports = {
    getUsers
}