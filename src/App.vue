<template>
  <v-app id="inspire">
    <app-tool-bar></app-tool-bar>
    <v-content app>
      <books-list></books-list>
    </v-content>
  </v-app>
</template>

<script>
import AppToolBar from '@/components/ToolBar';
import BooksList from '@/components/BooksList';

export default {
  name: 'app',
  components: {
    AppToolBar,
    BooksList,
  },
};
</script>
