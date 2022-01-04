// export function Scroll(){
//   // 原生鼠标监听事件
//   window.onscroll = function () {
//   var scrollTop = document.documentElement.scrollTop;
//   var scrollHeight = document.documentElement.scrollHeight;
//   var clientHeight = document.documentElement.clientHeight;
//   console.log(parseInt(scrollTop));
//   // console.log(scrollHeight);
//   // console.log(clientHeight);

//       let BT = document.querySelector(".back-top")
//       // let scrollTop =  document.documentElement.scrollTop
//       // console.log(scrollTop);
//       // console.log(scrollTop == 1500);
//       if(parseInt(scrollTop)  >=  1000 ){
//         BT.style.zIndex = 100
//       }else{
//         BT.style.zIndex = 0
//       }

//   setTimeout(()=>{
//     if (
//       parseInt(scrollHeight) - Math.ceil(scrollTop) ==
//       parseInt(clientHeight)
//     ) {
//         // console.log(this.goods);
//       // setTimeout(() => {
//         // alert("你已经阅读完");
//       // }, 2000);
//     }
//   },2000)

//   }
// }

export function BackTop(){
  // 返回顶部的原生JS动画封装
  var timer;
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    var oTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop =
        oTop - 50;
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  })
}

//  展示返回按钮
// export function ShowBack(){
//   window.onscroll = function (){
//     let BT = document.querySelector(".back-top")
//     let scrollTop =  document.documentElement.scrollTop
//     // console.log(scrollTop);
//     // console.log(scrollTop == 1500);
//     if(parseInt(scrollTop)  >=  1500 ){
//       BT.style.zIndex = 100
//     }else{
//       BT.style.zIndex = 0
//     }
//   }
// }