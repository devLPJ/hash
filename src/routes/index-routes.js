const express = require("express");
const router = express.Router();
function criptografa(teste, numCaracter) {
  var texto = [];
  var textoCriptografado = "";
  teste = teste.toLowerCase();
  for (i = 0; i < teste.length; i++) {
    if (teste.charCodeAt(i) >= 97 && teste.charCodeAt(i) <= 122) {
      if (teste.charCodeAt(i) + numCaracter > 122) {
        numCaracter = teste.charCodeAt(i) + numCaracter - 122;
      }
      texto[i] = String.fromCharCode(teste.charCodeAt(i) + numCaracter);
    } else {
      texto[i] = teste[i];
    }
  }

  return texto.join("");
}

router.get("/", (req, res, next) => {
  var teste = "help Brenner1 12.a32232";

  res.status(200).send({
    title: criptografa(teste, 3)
  });
});

module.exports = router;
