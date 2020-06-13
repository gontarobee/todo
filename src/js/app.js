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
    //todo: '',
    //kensaku: '',
    todo_list : [
      {
        id: 0,
        todo: '',
        today: '',
        checkbox: '',
        backgroundColor: '',
        completed_date: ''
      }
    ],
    //checkbox: false,
    //styles:{
    //    backgroundColor: 'white'
    //},
    log: '追加ボタンが押され、「',
    log2: '」が登録された。',
  },

  methods: {
    add_todo:  function(){

      //リスト内で一番大きいID数を認識させる
      let max = 0 // maxの初期値は限りなく小さい数値をセット
      for (const num in this.todo_list) {
        max = max + 1
        var new_id = max
      }
      // 配列追加
      this.todo_list.push({
        id: new_id,
        todo: this.todo,
        today: Date(),
        checkbox: '',
        backgroundColor: '',
        completed_date: ''
      })
    },

    // 配列を１つ削除
    list_delete: function(index){
      this.todo_list.splice(index,1)
    },

    //check-box がonの時のbackground-colorの指定
    li_style: function(index){
      if ( !this.todo_list[index].checkbox ) {
        this.todo_list[index].backgroundColor = '#C0C0C0';// 挙動が意図したことと逆になっている。なぞ。
        this.todo_list[index].completed_date = Date();
      } else {
        this.todo_list[index].backgroundColor = '#FFFFFF';
      }
    }
  },

  computed: {
    reverse_todo_list: function() {
      
      //(ケース1)
      return this.todo_list.slice().reverse();

      //(ケース2)
      //return this.todo_list.slice().sort(function(a, b){
        // 戻り値が正（b-aの差が正）のとき、aをbの前に並べ替え
        // 戻り値が負（b-aの差が負）のとき、aをbの後ろ並べ替え
      //  return b - a;
      //})

      //(ケース3)
      //return this.todo_list.slice().sort(function(a, b){
      //  if (a > b){
      //    return 1;
      //  }else{
      //    return -1;
      //  }
      //});
      
    },
  }

  /*
  computed: {
    filter_todoList: function() {

        var todo_list = [];
        for(var i in this.todo_list) {
            var kensaku_list = this.todo_list[i];
            if(kensaku_list.todo.indexOf(this.kensaku) !== -1) {
                todo_list.push(kensaku_list);
            }
        }
        return todo_list;
    }
}
*/





  /*
  computed: {
    kensaku: function(){
      for(var i in this.todo_list) {
          result = this.todo_list[i];
           if(result.todo.indexOf(this.kensaku) === -1) {
              kensaku = 'false';
           }
        }
      }
  }
  */

  




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


/*
var todo_kensaku_list = [];

  for(var i in this.todo_list) {

      var todo_kensaku_list = this.todo_list[i];

       if(user.name.indexOf(this.keyword) !== -1 {

          users.push(user);

      }
    }
  }
*/