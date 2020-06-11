import Vue from 'vue'

//"eslint-plugin-vue": "^5.2.3",

/*
new Vue({
  el: "#app",
  data: {
    year: (new Date()).getFullYear()
  }
})
*/

new Vue({
  el: "#app1",
  data: {
    todo: '',
    todo_list : [
      {
        id: 0,
        todo: '',
        today: ''
      }
    ],
    log: '追加ボタンが押され、「',
    log2: '」が登録された。',
    checkbox: false,
    styles:{
        backgroundColor: 'white'
    }
  },
  methods: {
    add_todo:  function(){

      //リスト内で一番大きいID数を認識させる
      let max = 0 // maxの初期値は限りなく小さい数値をセット
      for (const num in this.todo_list) {
        if(num > max) {
          max = num
          var new_id = max
        }
      }
       
      // 配列追加
      this.todo_list.push({
        id: new_id,
        todo: this.todo,
        today: Date()
      })
    },

    // 配列を１つ削除
    list_delete: function(index){
      this.todo_list.splice(index,1)
    },

    //check-box がonの時のbackfround-colorの指定
    li_style: function(){
      if(this.checkbox){
        this.styles.backgroundColor = '#C0C0C0'
      }else{
        this.styles.backgroundColor = 'white'
      }
    }
  }
})

new Vue({
  el: "app4",
})

/*
const nums = [1, 2, 3]
// maxの初期値は限りなく小さい数値をセット
let max = -Infinity
for (const num of nums) {
  // numがmaxより大きければmaxを上書きする
  if (max < num) {
    max = num
  }
}
console.log(max) // => 3
*/
