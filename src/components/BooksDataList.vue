<template>
  <v-layout row justify-center>
  <div d-flex id="list" class="mt-2">
  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="(item,i) in 100" :key="i">
      <v-layout wrap align-baseline　slot="header">
        {{["海苔食ってノリノリ", "ネジ切ってねじねじ", "キジでも分かる桃の割り方", "鬼退治入門", "鶴でも分かる機織り機入門"][i % 5]}}
        <v-spacer></v-spacer>
        <v-chip disabled　small outline v-if="Math.random() > 0.5">貸出中</v-chip>
        <v-chip disabled　small v-else outline color="green">貸出可能</v-chip>
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
</template>
<script>

export default {
};
</script>
<style scoped>
  #list{
    width: 100%;
    max-width: 800px;
  }
</style>
