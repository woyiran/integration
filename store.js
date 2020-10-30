   const store ={
    setUser(user) {
        // 存储用户信息到sessionStorage
        // 存储用户信息到sessionStorage
        // 现在实现：给什么存什么，完整替换。
        // 预期实现：局部修改某一个属性信息。
        const localUser = this.getUser()
        // 如果是登录时候使用  {} 空对象  {id,name,photo,token,refresh_token} 完整信息
        // 把你想存入的信息 合并覆盖到  当前user对象即可
        const nowUser = { ...localUser, ...user }
        window.sessionStorage.setItem(KEY, JSON.stringify(nowUser))
      },
        getUser() {
        // 获取用户信息从sessionStorage
        return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
      },
      // 删除本地存储
        clearUser () {
        window.sessionStorage.removeItem(KEY)
      }
   }
   
   
  
//    module.exports = store
