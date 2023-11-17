module.exports = (err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send("Risorsa non trovata");
  } else if (err.status === 501) {
    res.status(501).send("Funzionalità non implementata");
  } else {
    next(err);
  }
};
