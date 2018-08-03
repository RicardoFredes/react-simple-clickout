const fs = require('fs')
const babel = require('babel-core')
const { minify } = require('uglify-js')

const actions = fs.readFileSync('./src/actions.js', 'utf8')
const index = fs.readFileSync('./src/index.js', 'utf8')
const result = index.replace(/import(.*)\/actions(.*)/, optimizeActions(actions))
const babelOptions = { "presets": ["react", "es2015"] }
const es2015 = babel.transform(result, babelOptions).code
const minified = minify(es2015)

fs.writeFileSync('index.js', minified.code)

function optimizeActions(actions){
  const exportables = []
  actions.replace(/export function (.*)\(/g, (exportLine) => {
    exportables.push(exportLine.replace(/export function (.*)\(/, '$1'))
  })
  return `
const {${exportables.join(',')}} = (function() {
   ${actions.replace(/export function/g, 'function')}
  return { ${exportables.join(',')} }
})()`
}
