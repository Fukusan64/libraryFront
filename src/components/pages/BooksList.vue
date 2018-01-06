<template>
  <h1>{{pageName}}</h1>
</template>
<script>
import pageNameMixin from '@/utils/pageName';

export default {
  mixins: [pageNameMixin],
};
</script>
