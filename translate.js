
 // Translator entity
 var Translator = function() { }

 /** Translates from the input text to the output text.
  *
  * @param inputText The input text in Flurry JSON format.
  * @returns The output text in Framed JSON format.
  */
Translator.prototype.translate = function(inputText, callback)
{
  var self = this;
  var outputText = "Error: ";

  try {
    inputJSON = JSON.parse(inputText);

    self.transformJSON(inputJSON, function(outputJSON) {
         callback(JSON.stringify(outputJSON));
    });

  } catch (e) {
    console.error("Parsing error:", e);
    outputText += e;
    callback(outputText);
  }
}

 /** Transforms the JSON input object into a JSON output object.
  *
  * @param inputJSON A JSON object in the input format.
  * @returns A JSON object in the output format.
  */
Translator.prototype.transformJSON = function(inputJSON, callback)
{
  var self = this;

  var outputJSON = new Array();

  var query = inputJSON.query;
  var meta = inputJSON.meta;
  var sessions = inputJSON.sessionEvents;

  console.log("Translating data for " + query.project + " between " + query.startTime + " and "+ query.endTime);

  for(var i = 0; i < sessions.length; i++)
  {
    var session = sessions[i];

    // By default use the Flurry ID, but if the UID is passed use that instead.
    var uid = session.u;
    if(session.uid) uid = session.uid;

    var startAppObj = self.buildMixpanelJSON("Start App",session.t,uid);

    outputJSON.push(startAppObj);

    for (var j = 0; j < session.l.length; j++)
    {
      var event = session.l[j];

      var eventObj = self.buildMixpanelJSON(event.e,session.t+event.o,uid);
      outputJSON.push(eventObj);
    }
  }

  callback(outputJSON);

}

/**
 * Builds a Mixpanel JSON object from the input.
 */
Translator.prototype.buildMixpanelJSON = function(eventName, timestamp, uid)
{
  var obj = {};
  obj["event"] = eventName;

  var props = {};
  props["distinct_id"] = uid;
  props["time"] = timestamp;

  obj["properties"] = props;

  return obj;
}

module.exports = Translator;
