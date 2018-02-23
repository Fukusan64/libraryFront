<template>
  <v-layout row justify-center v-if="hitItems.length != 0 || !hasLoad">
  <div d-flex id="list" class="mt-2">
  <v-expansion-panel expand>
    <v-expansion-panel-content
      hide-actions
      v-for = "(item,i) in hitItems"
      :key = "i"
    >
      <v-layout wrap align-baseline　slot="header">
        <div class="title">
          <p>{{item.title}}</p>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="btn" v-on:click.stop="click">{{}}</v-btn>
      </v-layout>
      <v-card>
        <v-card-text class="grey lighten-3">
          <ul class="mx-3 my-1">
            <li>ここに</li>
            <li>著者とか</li>
            <li>ページ数とかの情報を出す</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </div>
  </v-layout>
  <main id="notfound" v-else>
    <img src="../assets/not-found.png">
  </main>
</template>
<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('bookList/getBookList');
  },
  methods: {
    click: () => {},
  computed: {
    ...mapState('bookList', {
      hasLoad: 'hasLoad',
      items: 'books',
    }),
    hitItems() {
      return this.items.filter((item) => {
        const keyWordIndex = item.title.indexOf(
          this.$store.state.search.keyWord,
        );
        return keyWordIndex !== -1;
      });
    },
  },
};
</script>
<style scoped>
  #list{
    width: 100%;
    max-width: 800px;
    overflow: hidden;
  }
  #notfound{
    position: relative;
    width: 100%;
    height: 100%;
    text-align:center;
  }
  #notfound > img{
    max-width: 100%;
  }
  .title{
    width: 55%;
  }
  .title > p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .btn{
    width: 50px;
    max-width: 35%;
  }
</style>
