# Hearthstone-Deck-Builder
Deck builder for hearthstone
## 1.Commands
    "build:dev": "webpack --config client/config/webpack.dev.js --progress --profile --display-error-details",
    "build:prod": "webpack --config client/config/webpack.prod.js  --progress --profile --bail",
    "build": "npm run build:dev",
    "lite": "lite-server",
    "postinstall": "typings install",
    "server-dev": "concurrently \"npm run watch:dev\" \"nodemon server.js\"",
    "server-new-dev": "concurrently \"npm run watch:dev\" \"nodemon server.js\"",
    "start": "concurrently \"npm run watch:dev\" \"nodemon server.js\"",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings",
    "watch:dev": "webpack --config client/config/webpack.dev.js --progress --profile --display-error-details --watch",
    "watch:prod": "webpack --config client/config/webpack.prod.js  --progress --profile --bail --watch",
    "watch": "npm run watch:dev",
    "webpack-dev-server": "webpack-dev-server",
    "webpack": "webpack"    
    
##### Start with "npm start" or "node server"

## 2. Structur


