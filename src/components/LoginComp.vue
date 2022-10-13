<template>
    <h3><strong>Login Page</strong> </h3>
    <div class="form-group">
      <Form @submit="handleSubmit">
        <div>
          <label for="exampleInputEmail1">Email address</label>
          <Field
            name="email"
            type="email"
            id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
            :rules="validateEmail"
            v-model="email"
            class="form-control" 
            placeholder="enter email"
          />
        </div>
        <div>
          <ErrorMessage name="email" class="errmsg" />
        </div>
        <div>
          <label for="exampleInputEmail1">Password</label>
          <Field
            name="password"
            type="text"
            v-model="password"
            :rules="validatePassword"
            class="form-control" 
    id="exampleInputPassword1" 
            placeholder="enter password"
          />
        </div>
        <div>
          <ErrorMessage name="password" class="errmsg" />
        </div>
        
        <h5  @click="goToSignup"> Forgot Password?</h5>
<br/>
        <button 
  type="submit" 
   class="btn btn-primary" >Submit 
  </button>

  <br/>

<br/>
<div>
        <button 
  type="submit" 
   class="btn btn-success" @click="goToSignup">Create New Account 
  </button>
</div>



      </Form>
    </div>
  </template>
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  export default {
    components: {
      Form,
      Field,
      ErrorMessage,
    },
  
    data() {
      return {
        email: "",
        password: "",
        confirmPass: false,
      };
    },
    methods: {
      
      validateEmail(value) {
        // if the field is empty
        if (!value) {
          return "*email required";
        }
        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return "must be a valid email";
        }
        // All is good
        return true;
      },
  
      //validate password
      validatePassword(value) {
        if (value) {
          let passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          if (passRegex.test(value)) {
            return true;
          } else {
            return "*enter a valid password";
          }
        } else {
          return "*password required";
        }
      },
  
      goToSignup() {
        this.$router.push("/signup");
      },
  
      
      handleSubmit() {
        this.$store.commit("login");
        alert("You are logged in");
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  .errmsg {
    color: red;
  }
  
  </style>