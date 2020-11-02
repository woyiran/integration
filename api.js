// const axios =require('./axios.min.js')

//  request = axios.create({
    
//   });
// const JSONBig=require('')
// const store =require('./store.js')
axios.defaults.baseURL = 'http://22.5.241.7/dacp/model/'
// axios.defaults.transformResponse = [
//   (data) => {
//     // data 此时是后端的原始数据
//     try {
//       // data 此时是后端的原始数据
//     // data 后台如果没有返回数据  值null
//     // JSONBig.parse(null) 报错  阻止程序运行
//       return JSONBig.parse(data)
//     } catch (e) {
//       return data
//     }
//   }
// ]
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }
// 配置一个axios  导出一个配置好的axios
axios.interceptors.request.use((config) => {
//   config.headers = {
//     // 在每次请求之前，获取token信息，追加在headers中
//     // 请求拦截器：在每次请求前 做某一些事情
//     Authorization: `Bearer ${store.getUser().token}`
//   }
    config.headers={
        Cookie: "",
        Host: "22.5.241.7"
    }
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
//   if (err.response.status === 401) {
//     // 失败的时候做一些事情
//     // 获取响应状态码 err对象包含响应对象  err.response
//     // 响应对象中包含状态码  err.response.status
//     // 跳转到登录页面 this.$router.push('/login')
//     // 方式1：
//     // $router.push('/login') 其实 地址栏改成  #/login
//     // location.hash = '#/login'
//     // 方式2：
//     // 此时没有vue实例，$router对象获取不到，通过router实例直接使用
// //     router.push('/login')
//   }
  return Promise.reject(err)
})
// exports=  request
