/**
 * Tests for the Flurry to Framed translator.
 */
var fs = require('fs');
var Translator = require('../translate.js');



// Test generate Mixpanel JSON output
exports['test buildMixpanelJSON'] = function(beforeExit, assert){
  var translator = new Translator();

  var output = translator.buildMixpanelJSON("Viewed report", 1329263748, "foo");

  assert.equal("{\"event\":\"Viewed report\",\"properties\":{\"distinct_id\":\"foo\",\"time\":1329263748}}",
               JSON.stringify(output));
};

// Test JSON transformation
exports['test transformJSON'] = function(beforeExit, assert){
  var translator = new Translator();

  var inputJSON = readTestJSON();

  translator.transformJSON(inputJSON, function(outputJSON) {
    assert.equal("[{\"event\":\"Start App\",\"properties\":{\"distinct_id\":\"TheTestUser1\",\"time\":200}},{\"event\":\"score\",\"properties\":{\"distinct_id\":\"TheTestUser1\",\"time\":220}}]",
                 JSON.stringify(outputJSON));
  });
};

/** read in some test JSON */
function readTestJSON()
{
  var text = fs.readFileSync("./test/test.json", "utf-8");
  return JSON.parse(text);
}
