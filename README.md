Flurry_to_Framed
================

Translator from Flurry's Raw Data format into Framed.io's input format, so Flurry customers can use Framed.io

Installation
------
First, makes sure you have Node and NPM installed. You can find information on installing them here:
http://nodejs.org/

Then, clone this project and from inside the project directory run npm to install required packages:

    npm install .


Usage
------
To run the tool, just execute the following:

    ./scripts/flurry2framed.sh INPUTFILE OUTPUTFILE
  
The input file should be the JSON file retrieved from the Flurry Raw Data API (http://support.flurry.com/index.php?title=API/Code/RawData) and the output file will be a JSON file in the Framed input format.


Tests
------
To run the tests and verify your installation, just run the following:
    
    ./scripts/run_unit_tests.sh
