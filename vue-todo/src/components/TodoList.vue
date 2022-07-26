<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for=" todoItem, index in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <span v-bind:class="todoItem.completed ? 'checkBtnCompleted':'checkBtn'" 
              v-on:click="toggleComplete({todoItem, index})">
          <i class="far fa-solid fa-check pointer"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
        <span class="removeBtn pointer" v-on:click="removeTodo({todoItem, index})">
          <i class="far fa-solid fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
  methods: {
    ...mapMutations({
      removeTodo : 'removeOneItem',
      toggleComplete : 'toggleOneItem',
    })
    // removeTodo(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
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

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>