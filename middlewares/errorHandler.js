const express = require("express");

module.exports = (err, req, res, next) => {
  if (err.status === 501) {
    res.status(501).send("Funzionalità non implementata");
  } else if (err.status === 500) {
    res.status(500).send("Errore interno del server");
  } else {
    res.status(err.status || 500).send(err.message || "Errore generico");
  }
};
