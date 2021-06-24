<template>
  <div id="app" :style="{backgroundColor: color}">
    <h1>페이지2</h1>
    <Child @send="send" :val="val"/> 
  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data: function(){
    return {color: "",val: true} //값 초기화
  },
  methods:{
    send(c){ //색상 값 Child 컴포넌트에서 받아와서 
      this.color=c; //현재 컴포넌트 색상 변수에 받아온 값 넣고 
      if(this.color=="yellow") this.val=false //노란색이면 val 값을 false로 
      else this.val=true //초록색이면 val 값 true로 
    }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

