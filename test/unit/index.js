import Vue from 'vue'
Vue.config.productionTip = false
// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../src/components/', true, /test.js$/)
testsContext.keys().forEach(testsContext)
// you want coverage for.
const srcContext = require.context('../../src', true, /\.(js|vue)$/)
srcContext.keys().forEach(srcContext)
