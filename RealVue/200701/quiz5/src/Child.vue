<template>
  <div>
    <h2>Child : <input type="text" v-model="msg" /></h2>
    <input type="radio" name="color" value="yellow" v-model="color" /> 노란색
    <input type="radio" name="color" value="green" v-model="color" /> 초록색
    <input type="radio" name="color" value="pink" v-model="color" /> 분홍색
    <button type="button" @click="$emit('send', msg,color)">ok</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {color: "yellow",msg: ""}
  } 
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
</style>

