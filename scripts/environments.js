const readPackageJsonPath = './package.json'
const writePackageJsonPath = './package.json'
const packageJson = require(readPackageJsonPath);

const reactScripts = {
  'start:local': 'env-cmd -f .env.local react-scripts start',
  'start:staging': 'env-cmd -f .env.staging react-scripts start',
  'start:prod': 'env-cmd -f .env.prod react-scripts start',
  test: 'react-scripts test',
  eject: 'react-scripts eject'
}

packageJson.scripts = reactScripts;

const fs = require('fs');
fs.writeFile(writePackageJsonPath, JSON.stringify(packageJson, null, 2), function(error) {
  if (error) {
    console.log("error", error)
  } else {
    console.log("packageJson written");
  }  
});
