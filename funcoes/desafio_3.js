const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function getFileData(filePath) {
  return new Promise((resolve) => {
    const data = fs.readFileSync(filePath);
    resolve(data);
  });
}

function fileDataToString(fileData) {
  return String(fileData);
}

getFileData(caminho).then(fileDataToString).then(console.log);
