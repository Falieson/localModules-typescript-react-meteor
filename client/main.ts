var testJS = require('0test-js');
const testJSname = 'JS IMPORT TEST'

const helloWorldTest = (module, name)=> console.log(module.hello('world') === 'hello world'? `${name} PASSED` : `${name} FAILED`)
helloWorldTest(testJS, testJSname)


var testTS = require('0test-ts')
const testTSname = 'TS IMPORT TEST'
const fooBarTest = (module, name) => console.log(module.foo+parseInt(module.bas) === (123+123)? `${name} PASSED` : `${name} FAILED`)
fooBarTest(testTS, testTSname)