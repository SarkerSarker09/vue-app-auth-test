<template>
    <div>
        <form @submit.prevent="login">
            <input type="email"     placeholder="Email" v-model="user.email"/>
            <input type="password" placeholder="Password" v-model="user.password" />
            <button type="submit">Login</button>
        </form>
        
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login: function() {
            console.log('login info', this.user)
            this.$store.dispatch('login', this.user)
		   		.then(() => this.$router.push('/'))
		   		.catch(err => console.log(err))
        }
    }
}
</script>