const express = require("express");
const router = express.Router();
function criptografa(teste, numCaracter) {
  var texto = [];
  for (i = 0; i < teste.length; i++) {
    texto[i] = String.fromCharCode(teste.charCodeAt(i) + numCaracter);
  }
  return texto.join("");
}

router.get("/", (req, res, next) => {
  var teste = "help";

  res.status(200).send({
    title: criptografa(teste, 3)
  });
});

module.exports = router;
