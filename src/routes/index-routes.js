const express = require("express");
const fs = require("fs");
const path = require("path");
const request = require("request");
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

router.get("/file", (req, res, next) => {
  let pathJson = path.resolve(__dirname, "answer.json");
  var result;
  const hostname = "https://api.codenation.dev/v1";
  const pathApi = "/challenge/dev-ps/generate-data?token=";
  const token = "0f30869d147d8ac6421c2b840863b2b036f1bb60";
  request(`${hostname}${pathApi}${token}`, (error, response, body) => {
    if (error) {
      console.error("error:", error);
    }
    console.log("status:", response && response.statusCode);
    result = body;
    console.log(result);
    fs.writeFile(pathJson, result, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("File was saved");
      }
    });
    res.status(200).send({
      result
    });
  });
});

module.exports = router;
