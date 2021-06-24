<template>
  <div>
    <h2>Child: <input type="text" v-model="msg"></h2>
    <input type="radio" value="yellow" name="color" v-model="color">노란색
    <input type="radio" value="green" name="color" v-model="color">연두색
    <input type="radio" value="pink" name="color"  v-model="color">분홍색
    <button type="button" @click="$emit('send',msg,color)">ok</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {msg: "",color:"yellow"}
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

