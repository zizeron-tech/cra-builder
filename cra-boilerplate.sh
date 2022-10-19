# Create react app with last version
npx create-react-app test-app $2

# Remove unnecessary files
rm -rf test-app/src/App.js
rm -rf test-app/src/App.css
rm -rf test-app/src/App.test.js
rm -rf test-app/src/Logo.svg
rm -rf test-app/src/serviceWorker.js
rm -rf test-app/src/index.css

# Install packages
cd test-app
npm install --save react-router-dom eslint
npm install --save-dev styled-components styled-system env-cmd

# Download and execute package.json overrides for run and build scripts
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/scripts/environments.js
node ./environments.js
rm ./environments.js

# Download and execute devops creation script
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/scripts/devops.js
node ./devops.js test-app $2
rm ./devops.js

# Download enviroment files
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/enviroments/.env.local
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/enviroments/.env.staging
curl -O https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/enviroments/.env.prod

# Add new exclusions to .gitignore
echo "" >> .gitignore
echo "# cra-builder" >> .gitignore
echo "/test-gitignore" >> .gitignore

# Add eslint config
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/.eslintrc -o ./eslintrc

# Download and copy app template
cd src
# - components/layout/Footer
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/layout/Footer/index.js -o ./components/layout/Footer/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/layout/Footer/Footer.js -o ./components/layout/Footer/Footer.js
# - components/layout/Header
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/layout/Header/index.js -o ./components/layout/Header/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/layout/Header/Header.js -o ./components/layout/Header/Header.js
# - components/layout/Layout
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/layout/Layout/index.js -o ./components/layout/Layout/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/layout/Layout/Layout.js -o ./components/layout/Layout/Layout.js
# - pages/Home
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/pages/Home.js -o ./pages/Home.js
# - theme
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/globalStyle.js -o ./theme/globalStyle.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/helpers.js -o ./theme/helpers.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/mixins.js -o ./theme/mixins.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/responsiveness.js -o ./theme/responsiveness.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/Theme.js -o ./theme/Theme.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/variables.js -o ./theme/variables.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/theme/fonts.css -o ./theme/fonts.css 
# - ui
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/index.js -o ./components/ui/index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Box.js -o ./components/ui/Box.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Div.js -o ./components/ui/Div.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Flex.js -o ./components/ui/Flex.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Form.js -o ./components/ui/Form.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/FullWidthImg.js -o ./components/ui/FullWidthImg.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Grid.js -o ./components/ui/Grid.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/H1.js -o ./components/ui/H1.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/H2.js -o ./components/ui/H2.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/H3.js -o ./components/ui/H3.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/H4.js -o ./components/ui/H4.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Hr.js -o ./components/ui/Hr.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/HSpacer.js -o ./components/ui/HSpacer.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Icon.js -o ./components/ui/Icon.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Img.js -o ./components/ui/Img.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Label.js -o ./components/ui/Label.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Link.js -o ./components/ui/Link.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/ResponsiveContent.js -o ./components/ui/ResponsiveContent.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/ResponsiveContentSvg.js -o ./components/ui/ResponsiveContentSvg.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Span.js -o ./components/ui/Span.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Table.js -o ./components/ui/Table.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Td.js -o ./components/ui/Td.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Text.js -o ./components/ui/Text.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/TextError.js -o ./components/ui/TextError.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/Tr.js -o ./components/ui/Tr.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/components/ui/VSpacer.js -o ./components/ui/VSpacer.js
# - other
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/App.js -o ./App.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/index.js -o ./index.js
curl --create-dirs https://raw.githubusercontent.com/iam-technologies/cra-builder/develop-eugenio/app-template/routesComponent.js -o ./routesComponent.js