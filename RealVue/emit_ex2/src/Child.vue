<template>
  <div>
    <p>Child: <input type="text" v-model="msg" /></p>
    <input type="radio" name="color" value="yellow" v-model="color"/> 노란색
    <input type="radio" name="color" value="green" v-model="color"/> 연두색
    <input type="radio" name="color" value="pink" v-model="color"/> 분홍색
    <button type="button" @click="$emit('send',msg,color)" >OK</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {msg: "",color:""}
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

