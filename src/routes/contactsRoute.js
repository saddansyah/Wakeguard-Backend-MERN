const express = require('express');
// const requireAuth = require('../middleware/requireAuth')
// const controller = require('../controller/notesController');
const { successResponseBuilder, errorResponseBuilder } = require('../helpers/responseBuilder');

const route = express.Router();

// route.use(requireAuth);

// Route for contacts controller

route.get('/', (req, res) => { res.status(200).json({ message: "get all contacts" }) });
route.get('/:id', (req, res) => { res.status(200).json({ message: "get contact" }) });
route.post('/', (req, res) => { res.status(200).json({ message: "add contact" }) });

route.put('/:id', (req, res) => { res.status(200).json({ message: "edit contact" }) });
route.delete('/:id', (req, res) => { res.status(200).json({ message: "delete contact" }) });

// Route error handler

route.put('/', (req, res, next) => {
    try {
        throw new Error("PUT '/' not found")
    } catch (e) {
        e.statusCode = 404;
        next(e)
    }
});

route.delete('/', (req, res, next) => {
    try {
        throw new Error("DELETE '/' not found")
    } catch (e) {
        e.statusCode = 404;
        next(e)
    }
});

module.exports = route