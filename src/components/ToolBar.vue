<template>
  <v-toolbar dark app fixed clipped-left color="indigo">
    <v-toolbar-side-icon @click.stop="navigationDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('page');
const { mapMutations } = createNamespacedHelpers('navigationDrawer');
export default {
  name: 'AppToolBar',
  methods: {
    ...mapMutations({
      navigationDrawerToggle: 'toggle',
    }),
  },
  computed: {
    ...mapGetters(['pageTitle']),
  },
};
</script>
