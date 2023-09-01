const fs = require('fs');
const replacethis="run"
const replacewith="walk"
const preview=true
const folder=__dirname

try {
   fs.readdir(folder, (err,test) =>{
    //   console.log(test);
      for (let index = 0; index < test.length; index++) {
        const item = test[index];
        let oldFile=path.join(folder,item)
        let newFile=path.join(folder, item.replaceAll(replacethis,replacewith))
        if(!preview)
        {
        fs.rename(oldFile,newFile, ()=> {
            console.log("Rename Done")
        })
    }
    else{
       if(oldFile!==newFile) console.log(oldFile+ "will be renamed to " +newFile)
    }
        
      }

  })
} catch (err) {
  console.error(err);
}
