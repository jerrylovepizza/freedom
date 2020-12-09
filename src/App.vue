<template>
  <v-app>

    <TopToolbar></TopToolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import TopToolbar from './components/TopToolbar.vue';

  @Component({
    components: {
      TopToolbar,  
    }
  })

  export default class extends Vue {
  }
</script>