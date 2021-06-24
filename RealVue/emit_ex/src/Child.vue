<template>
  <div>
    <h2>Child: <input type="text" v-model="hello"></h2>
     <div id="radio">
      <label>
          <input type="radio" name="color" value="#ffa" v-model="color" />yellow
      </label>
      <label>
          <input type="radio" name="color" value="#bfb" v-model="color"/>green
      </label>
      <label>
          <input type="radio" name="color" value="#bbf" v-model="color"/>blue
      </label>
    </div>
    <button type="button" @click="$emit('send',hello,color)">ok</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
    return {hello: "", color: ""}
  }
  //부모한테 전달할게 없으므로 props 넣지않음
}
</script>

<style scoped>
div { padding: 10px; margin: 10px; width:auto; }
button { padding: 0.5em 1.5em; }
</style>
