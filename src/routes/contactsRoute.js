const express = require('express');
const controller = require('../controllers/contactsController');
// const requireAuth = require('../middleware/requireAuth')

const route = express.Router();

// route.use(requireAuth);

// Route for contacts controller
route.get('/', controller.getAllContacts);
route.get('/:id', controller.getContact);
route.post('/', controller.createContact);
route.put('/:id', controller.updateContact);
route.delete('/:id', controller.deleteContact);

// Route error handler
route.put('/', (req, res, next) => {
    try {
        throw new Error("PUT '/' route is not found")
    } catch (e) {
        e.statusCode = 404;
        next(e)
    }
});

route.delete('/', (req, res, next) => {
    try {
        throw new Error("DELETE '/' route is not found")
    } catch (e) {
        e.statusCode = 404;
        next(e)
    }
});

module.exports = route