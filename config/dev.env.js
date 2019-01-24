var merge = require('webpack-merge')
var prodEnv = require('./prod.env')


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_OA: '"http://192.168.31.208:8080/mnhz.oa/"',
  // BASE_OA: '"http://192.168.31.208:8082/mnhz.oa/"',  //OA测试环境
  BASE_OA: '"http://192.168.33.219:8080/mnhz.oa/"',
  
  // BASE_API: '"http://192.168.33.244:8080/platform"',
  // CPA_API: '"http://192.168.33.244:8081/cpa"',
  //
  BASE_API: '"http://192.168.33.235:80/platform"',   //测试
  CPA_API: '"http://192.168.33.235:8081/cpa"',   //测试
  
  // BASE_API: '"http://192.168.33.211:8080/platform"',   //梁鑫
  // CPA_API: '"http://192.168.33.211:8081/cpa"',   //梁鑫
  
  
  // BASE_API: '"http://192.168.33.199:8080/platform"',   //任会
  // CPA_API: '"http://192.168.33.199:8081/cpa"',   //任会
  
  // BASE_API: '"http://192.168.33.223:8080/platform"', //杨南华
  // CPA_API: '"http://192.168.33.223:8081/cpa"' //杨南华
  
  // BASE_API: '"http://180.76.140.116:80/platform"',   //测试2
  // CPA_API: '"http://180.76.140.116:80/cpa"',   //测试2
  
  // BASE_API: '"http://180.76.108.207:80/platform"',   //测试2
  // CPA_API: '"http://180.76.108.207:8081/cpa"',   //测试2
  
  // BASE_API: '"http://192.168.33.192:8080/platform"', //王茜
  // CPA_API: '"http://192.168.33.192:8081/cpa"' //王茜
  
  //
  // BASE_API: '"http://192.168.33.210:8080/platform"',   //刘鹏飞
  // CPA_API: '"http://192.168.33.210:8081/cpa"',    //刘鹏飞
  
  // BASE_API: '"http://192.168.33.234:8080/platform"',   //程术林
  // CPA_API: '"http://192.168.33.234:8081/cpa"',   //程术林
  
  // 税务地址
  // SW_API: '"http://192.168.33.155:8088"' //王立
  SW_API: '"http://39.106.15.66:8088"' //线上
  //     SW_API: '"http://192.168.33.177:8088"' //线下
})
