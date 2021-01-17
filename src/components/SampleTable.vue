<template>
    <div>
        <img :src="`/static/images/${img}`"/>
        <table>
          <thead>
            <tr>
              <td>First name</td>
              <td>Last name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" v-bind:key="contact.firstName">
              <td>{{ contact.firstName }}</td>
              <td>{{ contact.lastName }}</td>
              <td>{{ contact.email }}</td>
            </tr>
          </tbody>
        </table>  
        <p v-if="loading">Test loading</p>
        <button v-on:click="toggleLoading()">Action</button>
    </div>
</template>
<script>
export default {
    name: 'SampleTable',
    data() {
      return {            
          img: 'sysable.png',
          loading: false,
          contacts: [
                  {firstName: 'Imran', lastName: 'Hossain', email: 'imran@gmail.com'},
                  {firstName: 'Hasan', lastName: 'Ahmed', email: 'hasan@gmail.com'},
                  {firstName: 'Sohan', lastName: 'Rahman', email: 'shohan@gmail.com'},
          ]                       
      }
    },   
    methods: {   
         toggleLoading: function() {
           this.loading = true;
           this.contacts.push({firstName: `Imran${this.contacts.length}`, lastName: `Hossain${this.contacts.length}`, email: `imran${this.contacts.length}@gmail.com`});
           this.loading = false;
         }
    },
    created() {
        console.log('contacts=>', this.contacts)
    }
}
</script>
