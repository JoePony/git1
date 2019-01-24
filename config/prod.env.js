var merge = require('webpack-merge')
var prodEnv = require('./prod.env')


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_OA: '"/mnhz.oa"',
  BASE_API: '"/platform"',
  CPA_API: '"/cpa"',
  SW_API:'"/"'
})
