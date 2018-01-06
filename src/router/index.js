import Vue from 'vue';
import Router from 'vue-router';
import BooksList from '@/components/pages/BooksList';
import LendReturnPage from '@/components/pages/LendReturnPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Books List',
      component: BooksList,
    },
    {
      path: '/lend',
      name: 'Lend Page',
      component: LendReturnPage,
    },
    {
      path: '/return',
      name: 'Return Page',
      component: LendReturnPage,
    },
  ],
});
