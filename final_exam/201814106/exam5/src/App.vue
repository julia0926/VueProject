<template>
  <div id="app">
    <h1>exam5</h1>
    <table>
      <tr v-for="(msg,index) in msgList" :key="index">
        <td>{{msg}}</td>
      </tr>
    </table>
    <Child @send="send" /> 
  </div>
</template>

<script>
import Child from './Child.vue' //같은 루트폴더에 있으면 이렇게 생성해도 됨 

export default {
  name: "App",
  components: { Child },
  data: function(){
    return {msg: "", msgList: []} //값 초기화
  },
  methods:{
    send(m){ 
      this.msg=m; 
      this.msgList.push(this.msg)
      
    }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
table { border-collapse: collapse; margin-bottom: 20px; }
td { padding: 5px;  border: 1px solid #aaa; width:100px;}
</style>

