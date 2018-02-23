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
    hasLoad: false,
  },
  mutations: {
    setBooks(state, booksDataArray) {
      state.books = booksDataArray;
      state.hasLoad = true;
    },
  },
  actions: {
    async getBookList({ commit }) {
      commit('setBooks', await api.getBookList());
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
