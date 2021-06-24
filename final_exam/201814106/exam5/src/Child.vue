<template>
  <div>
    <input type="text" v-model="msg" />
    <button type="button" @click="handleClick">Add</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return { msg: ""}
  },
   methods:{
    handleClick(){
      this.$emit('send', this.msg);
      this.msg=""
   },
 }, 
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 10px; margin-top: 10px; background-color: yellow;}
  button { padding: 0.5em 1.5em; margin: 10px; }
</style>

 