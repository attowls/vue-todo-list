<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer pointer" v-on:click="addTodo">
      <i class="far fa-solid fa-plus addBtn"></i>
    </span>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>경고!</h3>
        </template>
        <template #body>
          <h4>값이 입력되지 않았습니다.</h4>
        </template>
        <template #footer>
          <!-- <button @click="showModal = false">닫기</button> -->
          <div class="closeModalContainer pointer">
            <span class="closeModalButton" @click="showModal = false">닫기</span>
          </div>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "./common/AlertModal.vue";
export default {
  data () {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      const blank_pattern = /^\s+|\s+$/g;
      if (this.newTodoItem.replace(blank_pattern, "") != "") {
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput () {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  height: 40px;
  width: 80%;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #119208, #006e00);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  width: 50px;
  vertical-align: middle;
}
.closeModalContainer {
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  background-color: rgb(194, 194, 194);
  border-radius: 3px;
  margin: 0 auto;
}
.closeModalButton {
  color: #000000;
  display:block;
}

</style>
