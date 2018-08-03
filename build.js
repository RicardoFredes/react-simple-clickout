const fs = require('fs')
const babel = require('babel-core')
const actions = fs.readFileSync('./src/actions.js', 'utf8')
const index = fs.readFileSync('./src/index.js', 'utf8')
const result = index.replace(/import(.*)\/actions(.*)/, actions)
const babelOptions = { "presets": ["react", "es2015"] }

fs.writeFileSync('index.js', babel.transform(result, babelOptions).code)
