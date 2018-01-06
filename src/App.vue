<template>
  <v-app id="inspire">
    <app-tool-bar></app-tool-bar>
    <v-content app>
      <books-data-list></books-data-list>
    </v-content>
  </v-app>
</template>

<script>
import AppToolBar from '@/components/ToolBar';
import BooksDataList from '@/components/BooksDataList';

export default {
  name: 'app',
  components: {
    AppToolBar,
    BooksDataList,
  },
};
</script>
</style>
