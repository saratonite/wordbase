var fs = require('fs');
const app = require('commander');

/*
http://dictionary.cambridge.org/dictionary/essential-british-english/<word>
http://olam.in/Dictionary/en_ml/ok
https://app.dictionarist.com/ext-balloon.asp?q=<word>&lang=english-english
*/

app.version('0.0.1');

// List comand
app.command('list')
   .description('List all entries')
   .option('-l, --language [language]', 'Language')
   .action(function(opts){

     var lang = opts.language || 'english';

     console.log("LIST <"+lang+">" );
     listWordbase(lang);
   });
// Add new
app.command('add')
  .description('Add new word')
  .action(actionAddNewWord);
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
function listWordbase(language){

  var lang = language || 'english';

  var wordfiledata = readWordbase();

  var jsonData = JSON.parse(wordfiledata);
  if(jsonData.length){
    jsonData.forEach(function(word){
        if(word.meaning[lang].length)
          console.log(word.word , ' \t \t\t: ' + word.meaning[lang][0]);


    });
  }

}
// Add new word action
function actionAddNewWord(){
  console.log("Add");
}
