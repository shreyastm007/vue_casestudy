<template>
  
    <h3><strong>ORDER</strong> </h3>
    <div class="form-group">
      <Form @submit="handleSubmit">
        <div>
          <label for="exampleInputEmail1">Delivery address</label>
          <Field
            name="email"
            type="email"
            id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
            v-model="email"
            class="form-control" 
            placeholder="enter address"
          />
        </div>
        
        <div>
          <label for="exampleInputEmail1">Phone Number</label>
          <Field
            name="password"
            type="text"
            v-model="password"
            
            class="form-control" 
    id="exampleInputPassword1" 
            placeholder="enter number"
          />
        </div>

<br/>
<div>
        <button 
  type="submit" 
   class="btn btn-success" >SUBMIT
  </button>
</div>



      </Form>
    </div>
  </template>


<script>
  import { Form, Field,  } from "vee-validate";
  export default {
    components: {
      Form,
      Field,
    
    },
  
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      
  
      
      handleSubmit() {
        alert("Order Successful✅")
        alert("You will receive further updates on your registered email📧")
        this.$router.push('/')
       
      },
    }
}
    
  
  </script>
  
  <style scoped>
  .errmsg {
    color: red;
  }
  
  </style>



