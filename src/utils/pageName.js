export default {
  mounted() {
    this.$store.commit('page/setName', this.$route.name);
  },
  computed: {
    pageName() {
      return this.$store.state.page.name;
    },
  },
  watch: {
    $route(val) {
      this.$store.commit('page/setName', val.name);
    },
  },
};
