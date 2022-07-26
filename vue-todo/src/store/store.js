// import Vue from 'vue'
import Vuex from "vuex";
import * as getters from './getters';
import * as mutations from './mutations'

// Vue.use(Vuex); //vue 사용하는 전역에 사용할 특성 선언

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        // console.log(localStorage.key(i));
        arr.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters,
  mutations,
});
