import Vue from 'vue'

new Vue({
  el: "#app1",
  data: {
    todo: '',
    kensaku_value: '',
    max_id: -1,// add_todoして配列を最初に作るする際のidを「０」にしたいので、初期設定を−１としておく。こうすることでidとtodo_listの配列の番号を一致させる。
    min_id:'',
    result_id: '',
    del_idBox: [],
    todo_list : [],
    kensaku_todo_list: [],
    log: '追加ボタンが押され、「',
    log2: '」が登録された。',
  },

  methods: {
    add_todo:  function(){
     
      // if( this.del_idBox.length !== 0 && this.del_idBox[0].id !== ''  ){
      //   this.min_id = this.del_idBox[0].id;   // 最後に削除されたidを、min_idに代入。
      //   this.result_id = this.min_id;         // min_id　を　result_idに代入して、今回のid番号を確定させる。
      //   this.del_idBox.shift();               //配列の先頭の要素を削除　→　削除後は１番目以降の数字が一つづつ下がる。
      //   //if( this.del_idBox.length === 0){
      //   //  this.del_idBox[0].id = '';
      //   //}
      // }else if( this.del_idBox[0].id  === ''){
      //   this.max_id = this.max_id + 1;        // del_id が存在しない場合は、最大値＋１からインクリメントする。
      //   this.result_id = this.max_id;         // max_id　を　result_idに代入して、今回のid番号を確定させる。
      //   //this.del_idBox.shift();
      //   //this.del_idBox[0].id = 'hoge';
      // }else if(this.del_idBox.length === 0){
      //   this.max_id = this.max_id + 1;        // this.del_idBoxが存在しない場合。
      //   this.result_id = this.max_id;
      // }

      if( this.del_idBox.length === 0) {
        this.max_id = this.max_id + 1;
        this.result_id = this.max_id;
      }else{
        this.min_id = this.del_idBox[0].id;
        this.result_id = this.min_id;
        this.del_idBox.shift();
      }



      console.log('this.del_idBox.lengthは、『' + this.del_idBox.length + '』です。');

      
      // 通常の配列追加
      this.todo_list.push({
        id: this.result_id,
        todo: this.todo,
        today: '(新規)' + Date(),
        checkbox: false,
        //checkbox_no: this.todo_list.length,
        backgroundColor: '#FFFFFF',
        completed_date: '',
      }),

      // 検索用の配列追加
      this.kensaku_todo_list.push({
        id: this.result_id,
        todo: this.todo,
        today: '(新規)' + Date(),
        checkbox: false,
        //checkbox_no: this.kensaku_todo_list.length,
        backgroundColor: '#FFFFFF',
        completed_date: '',
      }),
      
      this.todo = ''//　配列追加後に htmlの　inputの値を消去し、placeholderの内容が表示されるようにする。
    },

    // 未完了配列を１つ削除した場合の、todo_list、kensaku_todo_listの同時削除（降順ベースの削除）
    list_delete: function(del){
      console.log(del);
      var del_index = this.todo_list.length - 1 - del; // 配列の中で数字を反転させる計算。

      //配列削除前に、削除予定idを、別建てに配列変数化しておく。
      this.del_idBox.push({
        id: this.todo_list[del_index].id,
      });

      //削除
      this.todo_list.splice(del_index,1);
      
      // 以下の文は、いささか不可解だが謎にうまく動いているので、一応良い。
      this.kensaku_todo_list.splice(del_index,1);// この行は「del_index」ではなく「del」のような気がするが、「del_index」でうまくいく。なぞ。
    },

    // 検索用配列を１つ削除した場合の、todo_list、kensaku_todo_listの同時削除(昇順ベースの削除)
    kensaku_list_delete: function(del){
      console.log(del);

      //配列削除前に、削除予定idを、別建てにしなければならなが、格納予定先の配列に「hoge」が入っている場合は、削除して、配列のlengthを「0」にしておく必要がある。
      if( this.del_idBox[0].id  === ''){
        this.del_idBox.shift();
      }
      
      //配列削除前に、削除予定idを、別建てに配列変数化しておく。
      this.del_idBox.push({
        id: this.kensaku_todo_list[del].id,
      });

      //削除
      this.todo_list.splice(del,1); //削除
      this.kensaku_todo_list.splice(del,1);
      //this.del_id = this.del_id +1;
    },
    
    // check-box がonの時のbackground-colorの指定
    li_style: function(itemId){
      console.log(itemId);
      if ( !this.reverse_todo_list[itemId].checkbox ) {
        this.reverse_todo_list[itemId].backgroundColor = '#C0C0C0';
        this.reverse_todo_list[itemId].completed_date =  '(完了)' + Date();
        // this.kensaku_todo_list[itemId].checkbox = true;
        // this.kensaku_todo_list[itemId].backgroundColor = '#C0C0C0';
        // this.kensaku_todo_list[itemId].completed_date =  '(完了)' + Date();
        
      } else if ( this.reverse_todo_list[itemId].checkbox ) {
        this.reverse_todo_list[itemId].backgroundColor = '#FFFFFF';
        // this.kensaku_todo_list[itemId].checkbox = false;
        // this.kensaku_todo_list[itemId].backgroundColor = '#FFFFFF';
        // this.kensaku_todo_list[itemId].completed_date =  '';
      }
    },
    li_style_complete: function(itemId){
      console.log(itemId);
      if ( !this.reverse_completed_todo_list[itemId].checkbox ) {
        this.reverse_completed_todo_list[itemId].backgroundColor = '#C0C0C0';
        this.reverse_completed_todo_list[itemId].completed_date =  '(完了)' + Date();
        // this.kensaku_todo_list[itemId].checkbox = true;
        // this.kensaku_todo_list[itemId].backgroundColor = '#C0C0C0';
        // this.kensaku_todo_list[itemId].completed_date =  '(完了)' + Date();
        
      } else if ( this.reverse_completed_todo_list[itemId].checkbox ) {
        this.reverse_completed_todo_list[itemId].backgroundColor = '#FFFFFF';
        // this.kensaku_todo_list[itemId].checkbox = false;
        // this.kensaku_todo_list[itemId].backgroundColor = '#FFFFFF';
        // this.kensaku_todo_list[itemId].completed_date =  '';
      }
    },
    kensaku_li_style: function(itemId){
      if ( !this.todo_list[itemId].checkbox ) {
        this.kensaku_todo_list[itemId].backgroundColor = '#C0C0C0';
        this.kensaku_todo_list[itemId].completed_date =  '(完了)' + Date();

        this.todo_list[itemId].checkbox = true;
        this.todo_list[itemId].backgroundColor = '#C0C0C0';
        this.todo_list[itemId].completed_date =  '(完了)' + Date();
        
      } else if ( this.todo_list[itemId].checkbox ) {
        this.kensaku_todo_list[itemId].backgroundColor = '#FFFFFF';
        
        this.todo_list[itemId].checkbox = false;
        this.todo_list[itemId].backgroundColor = '#FFFFFF';
        this.todo_list[itemId].completed_date =  '';
      }
    }
  },

  computed: {

    // 文字検索（絞り込み機能）
    kensaku: function() {
      var result = [];
      for(var i in this.kensaku_todo_list) {
          var hoge = this.kensaku_todo_list[i];
          if(hoge.todo.indexOf(this.kensaku_value) !== -1) { // 文字が見つからない場合は「-1」が返る。ここでは、ここで文字が見つかった場合、配列resultに文字を挿入することになる。
              result.push(hoge);
          }
      }
      return result;
    },
    
    // 未完了todo_listの降順化
    reverse_todo_list: function() {
      return this.todo_list.slice().reverse(); // reverse()だけでは、変なリバースになるので、slice()を入れて安定的なリバースにする。
    },

    // 完了todo_listの降順化
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
})