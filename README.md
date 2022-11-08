# This repository has been created for Planit Testing's Technical Assessment

## Environment Setup
- Install Node JS

```sh
brew install node
```

- Install Cypress
```sh
npm install cypress --save-dev
```

### Directory structure

```sh
├── downloads
├── e2e
│   └── planittests.cy.js (This is the test that I created)
├── fixtures
│   └── examples.json
├── screenshots
├── support
|   └── commands.js
|   └── e2e.js
├── videos
├── Jenkinsfile
```

### Running the test

### Go to 

```sh
cd path/to/cypress/directory
```

### To run it via Cypress UI
```sh 
npm run cypress:open
``` 
 
### To run it via headless browser
```sh
npx cypress run .\cypress\e2e\planittests.cy.js
```
