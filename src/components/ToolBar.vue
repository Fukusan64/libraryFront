<template>
  <v-toolbar
    app
    color="blue darken-3"
    dark
    clipped-left
    fixed
    extended
  >
  <v-toolbar-title>
    Prolab Library Manager
  </v-toolbar-title>
  <v-spacer></v-spacer>
    <v-text-field
      light
      solo
      clearable
      slot="extension"
      style="width: 100%;"
      prepend-icon="search"
      placeholder="Search"
      v-model="keyWord"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppToolBar',
  computed: {
    keyWord: {
      get() {
        return this.$store.state.search.keyWord;
      },
      set(value) {
        this.$store.commit('search/updateKeyWord', value);
      },
    },
  },
};

</script>
