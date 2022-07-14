1. **npm init** - asks questions and creates package.json
  * **npm init -y** - creates package.json with default data
2. **npm install lodash** or **npm i lodash** - installs lodash library to dependendies
  * **npm install --save-dev nodemon** or **npm i -D nodemon** - installs nodemon to devDependencies
  * **npm i** - installs all the dependencies and devDependencies form package.json
  * **npm i --production** - installs only dependencies
  * **npm i -g typescript** - installs typescript globally
3. **npm uninstall package-name** or **npm un package-name** - removes a package
4. **npm list** - shows a list of installed packages
5. **npm update** - updates packages to the latest version matching package.json
  * Read about Semantic versioning to understand the syntax of package version
6. **npm run script-name** - runs a script-name from scripts section in package.json
  * ./node_modules/.bin/ is also checked for executable libraries when running a script

*NPX is a command that allow you to run NPM packages*
**npx cowsay "Hello"** - will install a cowsay package to the central cache and run it
