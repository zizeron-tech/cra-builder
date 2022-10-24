fs = require('fs');

const startLocal = 'yarn start:local';

fs.writeFile('./start-local.sh', startLocal, function(error) {
  if (error) console.log("error", error)
  else console.log("Local start script written"); 
});


const startStaging = 'yarn start:staging';

fs.writeFile('./start-staging.sh', startStaging, function(error) {
  if (error) console.log("error", error)
  else console.log("Staging start script written"); 
});

const startProd = 'yarn start:prod';

fs.writeFile('./start-prod.sh', startProd, function(error) {
  if (error) console.log("error", error)
  else console.log("Production start script written"); 
});