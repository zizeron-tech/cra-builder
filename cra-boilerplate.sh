# Create react app with last version
npx create-react-app $1 $2

# Remove unnecessary files
rm -rf $1/src/App.js
rm -rf $1/src/App.css
rm -rf $1/src/App.test.js
rm -rf $1/src/Logo.svg
rm -rf $1/src/serviceWorker.js
rm -rf $1/src/index.css

# Install packages
cd $1
npm install --save react-router-dom redux react-redux
npm install --save-dev styled-components env-cmd

# Download and execute package.json overrides for run and build scripts
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/master/scripts/environments.js
node ./environments.js
rm ./environments.js

# Download and execute devops creation script
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/master/scripts/devops.js
node ./devops.js $1 $2
rm ./devops.js

# Download enviroment files
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/master/enviroments/.env.local
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/master/enviroments/.env.staging
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/master/enviroments/.env.prod

# Download and copy app template
cd src
# - components/layout/Footer
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Footer/index.js -o ./components/layout/Footer/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Footer/Footer.js -o ./components/layout/Footer/Footer.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Footer/Footer.scss -o ./components/layout/Footer/Footer.scss
# - components/layout/Header
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Header/index.js -o ./components/layout/Header/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Header/Header.js -o ./components/layout/Header/Header.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Header/Header.scss -o ./components/layout/Header/Header.scss
# - components/layout/Layout
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Layout/index.js -o ./components/layout/Layout/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Layout/Layout.js -o ./components/layout/Layout/Layout.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/components/layout/Layout/Layout.scss -o ./components/layout/Layout/Layout.scss
# - pages/Home
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/pages/Home.js -o ./pages/Home.js
# - redux
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/redux/actions/languageActions.js -o ./redux/actions/languageActions.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/redux/reducers/index.js -o ./redux/reducers/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/redux/reducers/languageReducer.js -o ./redux/reducers/languageReducer.js
# - scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/abstracts/_animations.scss -o ./scss/abstracts/_animations.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/abstracts/_helpers.scss -o ./scss/abstracts/_helpers.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/abstracts/_mixins.scss -o ./scss/abstracts/_mixins.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/abstracts/_variables.scss -o ./scss/abstracts/_variables.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/abstracts/index.scss -o ./scss/abstracts/index.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/base/_base.scss -o ./scss/base/_base.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/base/_reset.scss -o ./scss/base/_reset.scss
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/scss/base/index.scss -o ./scss/base/index.scss
# - other
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/App.js -o ./App.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/index.js -o ./index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/master/app-template/routes.js -o ./routes.js