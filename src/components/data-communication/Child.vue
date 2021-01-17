<template>
    <div>
        <p>Child Component</p>


        <span>Child data receive from parent {{parentMsg}}</span>
        <button v-on:click="childDataSendToParent()" >Child data send to Parent Component</button>

    </div>
</template>
<script>
export default {
    props: ['parentMsg'],
    name: 'Child',
    data() {
        return {            
        }
    },
    methods: {
        childDataSendToParent() {
            this.$emit('childMsg', 'This is sample message from child for parent')
            console.log('child data send to parent')
        }
    }
}
</script>