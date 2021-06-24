<template>
  <div>
    <p>Child :</p>
    <button type="button" :disabled="!val" @click="checkYellow">노란색</button>
    <button type="button" :disabled="val" @click="checkGreen">초록색</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return { yellow: "yellow", green: "green",val: true}
  },
  methods:{
    checkYellow(){
        this.val=false
        this.$emit('send',this.yellow)
    },
    checkGreen(){
        this.val=true
        this.$emit('send',this.green)
    }
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  button { padding: 0.5em 1.5em; margin-right: 10px;}
</style>

 