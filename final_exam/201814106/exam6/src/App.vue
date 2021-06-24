<template>
  <div id="app">
    <h1>exam6</h1>
    <table>
      <tr v-for="(row, index1) in matrix" v-bind:key="index1">
        <td v-for="(value, index2) in row" v-bind:key="index2"
        @click="count(index1,index2)" onmouseout="this.style.background='white'"
           onmouseover="this.style.background='yellow'">
          <Counter :val="value+1" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: "App",
  components: { Counter },
  data: function(){
    return {
      size: 5,
      val: 1,
      matrix: []
    } //값 초기화
  },
  created() {
        for (let r = 0; r < this.size; ++r) {
          this.matrix[r] = [];
          for (let c = 0; c < this.size; ++c)
            this.matrix[r][c] = r * this.size + c; 
            //줄 별로 들어갈 값 계산
        }
      },
  methods:{
   count(a,b){
     this.matrix[a][b]++
     this.$forceUpdate()
   }
  }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
table { margin-bottom: 20px; }
td { padding: 5px;  border: 1px solid #aaa; width:100px; cursor:pointer}
</style>

