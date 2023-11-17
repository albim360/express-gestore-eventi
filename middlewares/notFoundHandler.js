const express = require('express');

const notFoundHandler = (req, res, next) => {
    const err = new Error('Risorsa non trovata');
    err.status = 404;
    next(err);
};

module.exports = notFoundHandler;
