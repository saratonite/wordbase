var fs = require('fs');

var command = process.argv[2] || 'list';



// Read wordbase.json file
function readWordbase(){

  var fileData = fs.readFileSync(__dirname+'/wordbase.json','utf8');
  //console.log(fileData);

  return fileData;

}

function listWordbase(){

  var lang = process.argv[3] || 'english';

  var wordfiledata = readWordbase();

  var jsonData = JSON.parse(wordfiledata);
  if(jsonData.length){
    jsonData.forEach(function(word){
        if(word.meaning[lang].length)
          console.log(word.word , ' \t \t\t: ' + word.meaning[lang][0]);


    });
  }

}

switch(command){
  case 'list':
    listWordbase();break;
  default:
    console.info("Hoops");
}
