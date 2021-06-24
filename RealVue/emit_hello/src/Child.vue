<template>
  <div>
    <p>Child: <input type="text" v-model="msg" /></p>
    <button type="button" @click="$emit('send',msg,color)" >OK</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {msg: ""}
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; background-color: #bfb;}
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

