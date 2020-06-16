import Vue from 'vue'

//"eslint-plugin-vue": "^5.2.3",

new Vue({
  el: "#app1",
  data: {
    todo: '',
    kensaku: '',
    max_id: -1,// add_todoして配列を最初に作るする際のidを「０」にしたいので、初期設定を−１としてく。こうすることでidとtodo_listの配列の番号を一致させる。
    todo_list : [],
    log: '追加ボタンが押され、「',
    log2: '」が登録された。',
  },

  methods: {
    add_todo:  function(){

      this.max_id = this.max_id + 1;

      // 配列追加
      this.todo_list.push({
        id: this.max_id,
        todo: this.todo,
        today: '(新規)' + Date(),
        checkbox: false,
        backgroundColor: '#FFFFFF',
        completed_date: '',
      })
      
      this.todo = ''//　配列追加後に htmlの　inputの値を消去し、placeholderの内容が表示されるようにする。
    },

    // 配列を１つ削除
    list_delete: function(del){
      console.log(del);
      var del_index = this.todo_list.length - 1 - del; // 配列の中で数字を反転させる計算。
      this.todo_list.splice(del_index,1);
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
      return this.todo_list.slice().reverse(); // reverse()だけでは、変なリバースになるので、slice()を入れて安定的なリバースにする。
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