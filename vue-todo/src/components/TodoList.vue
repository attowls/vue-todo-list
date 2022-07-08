<template>
  <div>
    <ul>
      <li v-for=" todoItem, index in todoItems" v-bind:key="todoItem.item" class="shadow">
        <span v-bind:class="todoItem.completed ? 'checkBtnCompleted':'checkBtn'" 
              v-on:click="toggleComplete(todoItem, index)">
          <i class="far fa-solid fa-check"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="far fa-solid fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: [],
    }
  },
  created: function() { //인스턴스가 생성되자마자 실행되는 life cycle
    if(localStorage.length > 0) {
      for (var i = 0; i< localStorage.length; i++) {
        // console.log(localStorage.key(i));
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      console.log(todoItem, index);
      todoItem.completed = !todoItem.completed;
      //로컬 스토리지의 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex; /* 내용물의 너비 만큼만 */
  min-height: 3rem;
  height: 3rem;
  line-height: 3rem;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #018312;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #000000;
}
</style>