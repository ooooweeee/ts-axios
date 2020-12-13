import axios from '../../src/index'

/**
 * 参数值为数组
 * /base/get?foo[]=bar&foo[]=baz'
 */
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

/**
 * 参数值为对象
 * /base/get?foo=%7B%22bar%22:%22baz%22%7D
 */
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

/**
 * 参数值为 Date 类型
 * /base/get?date=2019-04-01T05:55:39.030Z
 */
// const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

/**
 * 特殊字符支持
 * /base/get?foo=@:$+
 */
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

/**
 * 空值忽略
 * /base/get?foo=bar
 */
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

/**
 * 丢弃 url 中的哈希标记
 * /base/get?foo=bar
 */
// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

/**
 * 保留 url 中已存在的参数
 * /base/get?foo=bar&bar=baz
 */
// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

/**
 * Data 传餐
 */
axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
})

/**
 * 设置 Headers
 */
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json'
  },
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
})

/**
 * Buffer 传餐
 */
// const arr = new Int32Array([21, 31])

// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

/**
 * URLSearchParams 作为 Data 传餐
 */
const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})
