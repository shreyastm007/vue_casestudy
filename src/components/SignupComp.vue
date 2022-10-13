<template>
    <h4><strong>SignUp Page</strong> </h4>
    
    <div class="form-group">
        <Form @submit="handleSubmit">

          <div>
            <label for="exampleInputEmail1">Email address</label>
            <Field
              name="email"
              type="email"
              class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
              :rules="validateEmail"
              v-model="email"
              placeholder="enter email"
            />
          </div>
          <div>
            <ErrorMessage name="email" class="errmsg" />
          </div>


          <div>
            <label for="exampleInputPassword1">Password</label>
            <Field
              name="password"
              type="text"
              class="form-control" 
    id="exampleInputPassword1" 
              :rules="validatePassword"
              v-model="passwordData"
              placeholder="enter password"
            />
          </div>
          <div>
            <ErrorMessage name="password" class="errmsg" />
          </div>


          <div>
            <label for="exampleInputConfirmPassword1"> Confirm Password</label>
            <Field
              name="confirmPassword"
              type="text"
              class="form-control" 
    id="exampleInputConfirmPassword1" 
              :rules="validateConfirmPassword"
              v-model="confirmPassData"
             
              placeholder="confirm Password"
            />
          </div>
          <div>
            <ErrorMessage name="confirmPassword" class="errmsg" />
          </div>


          <button type="submit" 
   class="btn btn-success" >Sign up</button>
  
          <p>
            Already have an account?
            <router-link to="/login" @click="goToLogin">Login here</router-link>
          </p>
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
        name: "",
        email: "",
        passwordData: "",
        confirmPassData: "",
      };
    },
    methods: {
      handleSubmit() {
       
        alert("SignUp Successful");
        this.$router.push("/login");
      },
  
      validateName(value) {
        // if the field is empty
        if (!value) {
          return "name field is required";
        }
        // if the field is not a valid name
        const regex = /[a-zA-Z]{2,}/;
        if (!regex.test(value)) {
          return "This field must be a valid name";
        }
        // All is good
        return true;
      },
  
      validateEmail(value) {
        // if the field is empty
        if (!value) {
          return "This field is required";
        }
        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return "This field must be a valid email";
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
            return "*enter valid password";
          }
        } else {
          return "*password required";
        }
      },
  
      validateConfirmPassword() {
        if (this.passwordData === this.confirmPassData) {
          return true;
        } else {
          return "*Password does not match";
        }
      },
  
      goToLogin() {
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .errmsg {
    color: red;
  }
  
  </style>