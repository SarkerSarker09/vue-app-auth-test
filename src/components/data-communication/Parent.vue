<template>
    <div>
        <p>Parent Component</p>

        <span>Parent Data receive from Child: {{recervedMsg}}</span>
        <button @click="dataSendFromParentToChild()">Data send From Parent to Child Component</button>
        <child :parentMsg="parentMsg" @childMsg="receiveMsgFromChild" />

    </div>
</template>
<script>
import Child from './Child'

export default {
    name: 'Parent',
    components: {
        Child
    },
    data() {
        return {
            parentMsg: '',
            recervedMsg: ''
        }
    },
    methods: {
        dataSendFromParentToChild () {
            console.log('clicked dataSendFromParentToChild button')
            this.parentMsg = 'This is sample message from parent'
        },
        receiveMsgFromChild (obj) {
            console.log('result=>', obj)
            this.recervedMsg = obj
        }
    }
}
</script>