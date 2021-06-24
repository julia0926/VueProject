<template>
  <div :style="{backgroundColor: color}">
    <h2>{{title}}-{{descrption}}</h2>
    <input type="number" v-model="count">
    <button type="button" @click="count++">증가</button>
    <button type="button" @click="count--">감소</button>
    <button type="button" @click="$emit('send',count)">전달</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    title:{type: String,required: true},
    descrption: {type: String, default: "Hello~"},
    color:{type: String, default: "#bbb"}
  },
  data: function() {
    return { count: 0};
  }
}
</script>

<style scoped>
div { display: inline-block; padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid black;}
button { padding: 0.5em 1.5em; margin: 20px 5px 0 0; }

</style>

