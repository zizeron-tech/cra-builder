npx create-react-app $1
rm -rf $1/src/App.js
rm -rf $1/src/App.css
rm -rf $1/src/App.test.js
rm -rf $1/src/Logo.svg
rm -rf $1/src/serviceWorker.js
rm -rf $1/src/index.css
npm install --save react-router-dom redux react-redux
npm install --save-dev node-sass env-cmd
cp -a ./app-template/. $1/src
cp -a ./enviroments/. $1/.
node scripts/environments.js $1
node scripts/devops.js $1