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
      //{
      //  id: 0,
      //  todo: '',
      //  today: '',
      //  checkbox: '',
      //  backgroundColor: '',
      //  completed_date: ''
      //}
    ],
    //completed_todo_list :[],/////////////////////////  これに　タスク完了の配列データを入れる予定。
    log: '追加ボタンが押され、「',
    log2: '」が登録された。',
  },

  methods: {
    add_todo:  function(){

      // id番号作成

        //リスト内で一番大きいID数を認識させる
        if(this.todo_list.id === undefined){
          var new_id = 0
        }
        for (var num in this.todo_list) {
          //if (typeof new_id == this.todo_list) { // php のisset　のようなもの。　全配列のなかに同じ物がないかどうかチェック
          //  new_id = new_id + 2
          //}
          new_id = new_id + 1

        }

      // 配列追加
      this.todo_list.push({
        id: new_id,
        todo: this.todo,
        today: '(新規)' + Date(),
        checkbox: false,
        backgroundColor: '#FFFFFF',
        completed_date: '',
      })
      
      this.todo = ''//　配列追加後に htmlの　inputの値を消去し、placeholderの内容が表示されるようにする。
      
      // 完了用配列追加
      /*
        this.completed_todo_list.push({
          id: new_id,
          todo: this.todo,
          checkbox: '',
          backgroundColor: '',
          completed_date: ''
        })
      */
    },

    // 配列を１つ削除
    list_delete: function(del){
      //if(todo_list.length <= 1){ // 配列数が１以下の時
      //  this.todo_list.new_id = 1 // 配列数が残り１の時は、new_id を　１に再設定する。これをしないと id の順番が壊れる。
      //}
      this.todo_list.splice(del,1) // itemId-1 の番号の配列から１つ取り除く。
      
    },

    // check-box がonの時のbackground-colorの指定
    li_style: function(itemId){
      if ( !this.todo_list[itemId].checkbox ) {
        this.todo_list[itemId].backgroundColor = '#C0C0C0';
        this.todo_list[itemId].completed_date =  '(完了)' + Date();
        
      } else if ( this.todo_list[itemId].checkbox ) {
        this.todo_list[itemId].backgroundColor = '#FFFFFF';
      }
    }
  },

  computed: {

    reverse_todo_list: function() {
      
      //(ケース1)
      return this.todo_list.slice().reverse(); // reverse()だけでは、変なリバースになるので、slice()を入れて安定的なリバースにする。

      //(ケース2)
      //return this.todo_list.slice().sort(function(a, b){
        // 戻り値が正（b-aの差が正）のとき、aをbの前に並べ替え
        // 戻り値が負（b-aの差が負）のとき、aをbの後ろ並べ替え
      //  return b - a;
      //})

      //(ケース3)
      //return this.todo_list.slice().sort(function(a, b){
      //  if (a.today > b.today){
      //    return 1;
      //  }else{
      //    return -1;
      //  }
      //});
      
    },

    reverse_completed_todo_list: function() {
     
      return this.todo_list.slice().sort(function(a, b){
        if (a.completed_date < b.completed_date){ // 降順の場合は　a<b　を使う
          return 1;
        }else{
          return -1;
        }
      });
      
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