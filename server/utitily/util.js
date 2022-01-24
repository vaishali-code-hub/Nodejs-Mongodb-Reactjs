
const fs = require('fs')
const path = require('path'); 

const file = path.join(`${__dirname}`, '../product_data/data.json')

async function importJsonFile(Products) {  
  var data = '';
// Check that the file exists locally
if(!fs.existsSync(file)) {
    console.log("File not found "+file);
  }         
  // The file *does* exist
  else {
    ///read json data file
    try {
    const rawdata =fs.readFileSync(file,'utf8')
    if(rawdata.length !== 0){
      console.log("reading json file...");
     data = JSON.parse(rawdata);
     if(data){
      await  Products.insertMany(data)
      console.log('File imported to database !!')
      }
      
    }
    else{
      console.log('Please check file has data....')
      process.exit();
  }
  } catch(e) {
    console.log(e);
    
  }
  }

}

module.exports={
    importJsonFile
}
