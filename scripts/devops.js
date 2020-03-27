fs = require('fs');
const profile = process.argv[2] || 'iamtech';

const deployStaging = 'npm run build:staging && aws s3 --profile '+profile+' sync build/ s3://app-'+appName+'-staging';

fs.writeFile('./deploy-staging.sh', deployStaging, function(error) {
  if (error) console.log("error", error)
  else console.log("Staging deploy script written"); 
});

const deployProd = 'npm run build:prod && aws s3 --profile '+profile+' sync build/ s3://app-'+appName+'-prod';

fs.writeFile('./deploy-prod.sh', deployProd, function(error) {
  if (error) console.log("error", error)
  else console.log("Production deploy script written"); 
});


const startLocal = 'npm run start:local';

fs.writeFile('./start-local.sh', startLocal, function(error) {
  if (error) console.log("error", error)
  else console.log("Local start script written"); 
});


const startStaging = 'npm run start:staging';

fs.writeFile('./start-staging.sh', startStaging, function(error) {
  if (error) console.log("error", error)
  else console.log("Staging start script written"); 
});

const startProd = 'npm run start:prod';

fs.writeFile('./start-prod.sh', startProd, function(error) {
  if (error) console.log("error", error)
  else console.log("Production start script written"); 
});