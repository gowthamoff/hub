<template>
    <button @click="clickdisplay()" :style="{backgroundColor:color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name : 'Button',
    props : {
        text : String,
        color : String,
    },
    methods : {
        clickdisplay(){
            this.$emit('btn-click')
        }
    }
} 
</script>
