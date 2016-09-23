var fs = require('fs');
const app = require('commander');

/*
http://dictionary.cambridge.org/dictionary/essential-british-english/<word>
*/

app.version('0.0.1');

// List comand
app.command('list')
   .description('List all entries')
   .action(function(){
     console.log("LIST");
     listWordbase();
   });
// Help
app.command('help')
   .description('List all entries')
   .action(function(){
     console.log("HELP");
   });


app.parse(process.argv);


// Read wordbase.json file
function readWordbase(){

  var fileData = fs.readFileSync(__dirname+'/wordbase.json','utf8');
  //console.log(fileData);

  return fileData;

}
//
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
