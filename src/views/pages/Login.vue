<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form  @submit.prevent="Login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input  v-model="username" type="text" class="form-control" placeholder="NIP/NRP" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input v-model="password" type="password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4" ><b-spinner v-show="onLoad" small></b-spinner>    Login</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<script>
import VueSession from 'vue-session'
import Vue from 'vue'
import Router from 'vue-router'
let LoginData

export default {
  name: 'Login',
  data(){
    return {
      username:null,
      password:null,
      onLoad:false
    }
  },
  methods:{
    Login(){
      LoginData = axios.post('http://gbi.sytes.net:3000/login',{username: this.username,password: this.password})
      this.onLoad = true
      LoginData
      .then(Response => {if(Response.data.message == 'success'){
          const token = Response.data.values.token_jwt
          console.log("ini pas login", token)
          localStorage.setItem('tokena',token)
          console.log(Response)
          this.$router.push({path: '/dashboard'})
          }else{
            alert('ID atau Password salah')
          }
        })
        .catch(error => alert('Login gagal'))

    },
  }
}
</script>
