<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Material Design With Vue.js Demo</div>      
      </md-card-header>
      <md-card-content>     

          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link><span v-if="isLoggedIn"> |
               <a @click="logout">Logout</a></span>
          </div>




             <router-view/>
       
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  


  export default {
    name: 'app',
    computed: {          
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn
        }
    },
    methods: {
      logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
      created: function() {
        this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(logout)
          }
          throw err;
        });
      });
      }
    }    
  }
</script>

<style>
  #app {
    margin-top: 60px;
    margin-left: 30px;
    margin-right: 30px;
  }
</style>
