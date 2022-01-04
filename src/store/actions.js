export default {
  addCart(context,payload){
    return new Promise((resolve,rejcet)=>{
      // 判断是否添加过
    let oldInfo = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldInfo){
    //   // oldInfo.count +=1 
      context.commit("addCounter",oldInfo)
      resolve ("已将该商品数量 +1")
    }else{
      payload.count = 1
    //   // context.cartList.push(payload)
      context.commit("addToCart",payload)
      resolve("已将该商品加到购物车")
    }
    })
  }
}