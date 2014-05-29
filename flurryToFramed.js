/**
 * Translator from Flurry's Raw Data format into Framed.io's input format, so Flurry customers can use Framed.io
 */
 var fs = require('fs');
 //var Translator = require('./translate.js');

 //var translator = new Translator();

 console.log("Flurry To Framed Data Translator v0.1");

 var inputFile = process.argv[2];
 var outputFile = process.argv[3];

 var textInput = fs.readFileSync(inputFile, "utf-8");

 console.log("=======");
 console.log("Input: " + inputFile);
 console.log(textInput);


fs.writeFileSync(outputFile, textInput, "utf-8");


 console.log("=======");
 console.log("Output: " + outputFile);


  console.log("DONE");
