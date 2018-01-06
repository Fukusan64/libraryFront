import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const page = {
  namespaced: true,
  state: {
    name: '',
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
  },
  getters: {
    pageTitle(state) {
      let pageTitle = '';
      switch (state.name) {
        case 'Books List':
          pageTitle = '書籍一覧';
          break;
        case 'Lend Page':
          pageTitle = '借りる';
          break;
        case 'Return Page':
          pageTitle = '返却';
          break;
        default:
          break;
      }
      return pageTitle;
    },
  },
};

const navigationDrawer = {
  namespaced: true,
  state: {
    isDraw: false,
  },
  mutations: {
    draw(state, isDraw) {
      state.isDraw = isDraw;
    },
    toggle(state) {
      state.isDraw = !state.isDraw;
    },
  },
};

export default new Vuex.Store({
  strict: true,
  modules: {
    page,
    navigationDrawer,
  },
});
