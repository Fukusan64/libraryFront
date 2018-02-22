import Vuex from 'vuex';
import Vue from 'vue';
import api from '@/api/api';

Vue.use(Vuex);

const search = {
  namespaced: true,
  state: {
    keyWord: '',
  },
  mutations: {
    updateKeyWord(state, val) {
      state.keyWord = !val ? '' : val;
    },
  },
};

const bookList = {
  namespaced: true,
  state: {
    books: [],
  },
  mutations: {
    addBooks(state, booksDataArray) {
      state.books = booksDataArray;
    },
  },
  actions: {
    async getBookList({ commit }) {
      commit('addBooks', await api.getBookList());
    },
  },
};

export default new Vuex.Store({
  strict: true,
  modules: {
    search,
    bookList,
  },
});
