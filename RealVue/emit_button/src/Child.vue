<template>
  <div>
    <p>Child :</p>
    <button type="button" :disabled="!val" @click="$emit('send',yellow,val)">노란색</button>
    <button type="button" :disabled="val" @click="$emit('send',green,val)">초록색</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
      return { yellow: "yellow", green: "green"}
  },
  props: {val: Boolean} //부모에서 val 값을 받아와서 버튼의 활성화여부를 색깔에 따라 정함 
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  button { padding: 0.5em 1.5em; margin-right: 10px;}
</style>

