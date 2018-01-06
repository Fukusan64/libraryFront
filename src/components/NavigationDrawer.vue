<template>
  <v-navigation-drawer
    temporary
    hide-overlay
    clipped
    fixed
    v-model="draw"
    app
  >
    <v-list>
      <v-list-tile
        v-for="list in lists"
        :key="list.id"
        :to="{name :list.name}"
        exact
      >
        <v-list-tile-action>
          <v-icon>{{list.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{list.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations, mapState } = createNamespacedHelpers('navigationDrawer');
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      lists: [
        {
          title: '書籍一覧',
          icon: 'list',
          name: 'Books List',
        },
        {
          title: '借りる',
          icon: 'file_download',
          name: 'Lend Page',
        },
        {
          title: '返却',
          icon: 'file_upload',
          name: 'Return Page',
        },
      ].map((e, i) => ({ ...e, id: i })),
    };
  },
  computed: {
    draw: {
      ...mapState({
        get: 'isDraw',
      }),
      ...mapMutations({
        set: 'draw',
      }),
    },
  },
};
</script>
