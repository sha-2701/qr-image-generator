import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';
inquirer
.prompt([
    {
      message: 'Type your URL here:',
      name: 'URL'
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("url.txt", url, (err)=>{
      if(err){
        throw err;
      }
      else{
        console.log("File has been created!")
      }
    })

    console.log(answers);
  })
