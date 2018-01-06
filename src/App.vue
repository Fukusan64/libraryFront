<template>
  <v-app id="inspire">
    <app-navigation-drawer></app-navigation-drawer>
    <app-tool-bar></app-tool-bar>

    <v-content app>
      <router-view id="view"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppToolBar from '@/components/ToolBar';
import AppNavigationDrawer from '@/components/NavigationDrawer';

export default {
  name: 'app',
  components: {
    AppToolBar,
    AppNavigationDrawer,
  },
};
</script>
<style scoped>
#view{
  padding: 10px;
}
</style>
