module.exports = (err, req, res, next) => {
  console.error("Errore nel middleware di gestione degli errori:", err);

  if (err.status === 404) {
    res.status(404).send("Risorsa non trovata");
  } else if (err.status === 501) {
    res.status(501).send("Funzionalità non implementata");
  } else {
    res.status(err.status || 500).send(err.message || "Errore generico");
  }
};
