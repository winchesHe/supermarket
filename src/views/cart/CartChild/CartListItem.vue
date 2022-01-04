<template>
  <div class="cart-list-item">
    <check-btn @click.native="checkCart" :check="product.check"></check-btn>
    <div class="cart-img"><img :src="product.imgURL" alt=""></div>
    <ul class="cart-desc">
      <li class="title-fir">{{product.title}}</li>
      <li class="desc-fir">{{product.desc}}</li>
      <li class="cart-price">￥{{product.newPrice}}<span>X{{product.count}}</span></li>
    </ul>
  </div>
</template>

<script>
import CheckBtn from '@/components/content/checkBtn/CheckBtn'
export default {
  name:"CartListItem",
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckBtn
  },
  methods:{
    checkCart(){
      this.product.check = !this.product.check
    }
  }
}
</script>

<style scoped>
  li{
    list-style: none;
  }
  .cart-list-item{
    display: flex;
    height: 140px;
    width: 100%;
    align-items: center;
  }
  .cart-img img{
    width: 95px;
    height: 120px;
  }
  .cart-desc{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 15px;
  }
  .cart-desc li{
    margin-bottom: 15px;
  }
  .title-fir{
  color: rgb(61, 60, 60);
  font-size: 20px;
  }
  .desc-fir{
    color:rgb(108, 108, 108) ;
  }
  .cart-price{
    color: rgb(255, 105, 0);
    font-size: 20px;
  }
  .cart-price span{
    color: rgb(108, 108, 108);
    position: absolute;
    right: 5px;
  }
</style>