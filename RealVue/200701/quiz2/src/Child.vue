<template>
  <div>
    <p>Child :</p>
    <button type="button" :disabled="!val" @click=sendYellow>노란색</button>
    <button type="button" :disabled="val" @click=sendGreen>초록색</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {yellow: "yellow", green: "green", val: true}
  },
  methods:{
      sendYellow(){
          this.$emit('send', this.yellow)
          this.val=false
      },
      sendGreen(){
          this.$emit('send', this.green)
          this.val=true
      }
  }
 
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
</style>

