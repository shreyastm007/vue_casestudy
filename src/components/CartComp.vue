<template>
  <h2> MY CART</h2>
<br/>


<!-- <div>
  <button 
  type="submit" 
   class="btn btn-success" @click="goToHome" ><h5> Place Order🚢</h5> 
  </button>
</div> -->


<div>
<button 
  type="submit" 
   class="btn btn-warning" @click="goToProducts" ><h6>Continue Shopping🛒 </h6> 
  </button>
</div>



  <div class="c1 mt-4">
    <div class="row">
      <div
        class="card"
        style="width: 20rem"
       
        v-for="product in products"
        :key="product.id"
        :id="product.id"
      >
      
        <img 
          class="card-img-top"
          :src="product.img"
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">Name: {{ product.name }}</h4>
          <p class="card-text">Description: {{ product.description }}</p>
          <p class="card-text">Price: {{ product.price }}</p>
          <p class="card-text">Premium Price✨: {{ product.PremiumPrice}}</p>
          <h6> Quantity:{{counter}}</h6>

          <!-- <h1>Quantity:  {{calculation}} </h1>  -->
<div>
          <button type="submit" @click="increment"> ➕</button>
        
  <button @click="decrement"> ➖ </button>
</div>
  <br/>
<div>

  <button type="submit" class="btn btn-primary" @click="BUY"> Buy Now </button>

</div>
  <br/>
  <div class="card-footer">
          <button class="btn btn-danger"  @click="removeProd(product.id)" > DELETE</button>
          </div>

          
          </div>
        </div>
      </div>
    </div>
<br/>



</template>

<script>

import counterMixins from '@/mixins/CounterMixins';
export default {
  mixins:[counterMixins(0,1)],
  props: [ ],
  data() {
    return {

      products: [
        {
          id: 1,
          img:"https://rukminim1.flixcart.com/image/580/696/l2dmky80/shoe/j/m/t/4-5599318-4-bata-blue-original-imagdqch3naecuuc.jpeg?q=50",
          name: "Bata",
          description: "Casual Boots",
          price: 350,
          PremiumPrice: 300,
        },
        {
          id: 2,
          img:"https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/k/k/s/-original-imagg7hzyjzam9s9.jpeg?q=50",
          name: "Dunkaston",
          description: "Mens Sneakers",
          price: 450,
          PremiumPrice: 400,
        },
        {
          id: 3,
          img:"https://rukminim1.flixcart.com/image/612/612/jy0frm80/deodorant/g/f/p/400-hamilton-deodorant-body-spray-denver-men-original-imafgb9fsafampwz.jpeg?q=70",
          name: "Denver",
          description: "Mens perfume",
          price: 650,
          PremiumPrice: 600,

        },
        {
          id: 4,
          img:"https://rukminim1.flixcart.com/image/580/696/xif0q/suit/o/u/f/-original-imagh3jb3fzuhbnj.jpeg?q=50",
          name: "Peter England",
          description: "Mens Suits",
          price: 4000,
          PremiumPrice: 3500,
        },
  
        {
          id: 5,
          img:"https://rukminim1.flixcart.com/image/580/696/kms2j680/wallet-card-wallet/m/m/j/men-s-genuine-leather-leather-tri-fold-rfid-blocking-wallet-original-imagfhszgtgnkb9e.jpeg?q=50",
          name: "Urban Leather",
          description: " Mens Leather Wallet",
          price: 400,
          PremiumPrice: 350,
        },
      
      ],
       TotalPrice:0,
       
      
    };
  },

  computed:{
        calculation(){
            return{}
                 
            
        }
    },
  methods: {
    goToProducts(){
      this.$router.push("/products")
    },
    goToHome(){
      alert("Order Placed Successfully")
      //this.$router.push("/")
    },

    BUY(){
     
      this.$router.push("/buy")
    },




    removeProd(ID) {
      let deleteProduct = this.products;
      let productid = ID;

     
      //console.log("deleteProduct", deleteProduct);

      deleteProduct = deleteProduct.filter((item) => {
        return item.id != productid;
      });

      //console.log("deleteProduct", deleteProduct);
      this.products = deleteProduct;
    },



  }

}
</script>

<style>

</style>
