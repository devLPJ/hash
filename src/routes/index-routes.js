const express = require("express");
const fs = require('fs');
const path = require('path');
const request = require('request');
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

router.get("/file", (req, res, next) => {
  let pathJson = path.resolve(__dirname, 'answer.json');
  var result;
  request('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN', (error, response, body) => {
    if (error) {
      console.error('error:', error);
    }
    console.log('status:', response && response.statusCode) 
    result = body
    console.log(result)
    fs.writeFile(pathJson, result, err => {
      if (err) {
        console.log(err)
      } else {
        console.log('File was saved')
      }
      
    });
    res.status(200).send({
      result
    });
  });

});

module.exports = router;
