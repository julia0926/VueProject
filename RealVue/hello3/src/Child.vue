<template>
  <div>
      <h3>Child: <input type="text" v-model="msg"></h3>
      <input type="radio" name="color" value="yellow" v-model="color" /> 노란색
      <input type="radio" name="color" value="green" v-model="color" /> 초록색
      <input type="radio" name="color" value="pink" v-model="color" /> 핑크색
      <button type="button" @click="$emit('ok',msg,color)">OK</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return {msg: "",color: ""}
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px;}
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

