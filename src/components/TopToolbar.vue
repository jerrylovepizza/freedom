<template>

  <div>
    <v-toolbar elevation = "0">
       <v-avatar>
      <img
        :src="logo"
        alt="新闻"
      >
    </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
         <v-btn
          text          
          elevation="0"
          v-for="(item, index) in menu"
          :key="item.id"
          :to="item.link"          
          :class="{active: (active_index == index)}"
          v-on:click="clickable(item.id)"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>      
    </v-toolbar>
  <div v-if="isSearch">
    <SearchBar></SearchBar>
  </div>
  </div>
</template>

<script lang="ts">

  export interface MenuModel{
    id: number;
    title: string;
    link: any;
  }

  import image from '../assets/logo.png';
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import SearchBar from '../components/SearchBar.vue';    

  @Component({
    components: {
      SearchBar
    }
  })

  export default class TopToolbar extends Vue {
    @Getter("title", { namespace: 'topToolbar' }) title!: string;
    
    logo: any = image;
    active_index: number = -1;    
    isSearch: boolean = false;
    menu : MenuModel[] = [
      {id: 1, title: '搜索', link: { path: '/#search'}},
      {id: 2, title: '新闻', link: { path: '/'}},
      {id: 3, title: '分享', link: { name: 'share'}},
      {id: 4, title: '翻墙测试', link: { name: 'firewall'}},
      {id: 5, title: '常见问题', link: { name: 'faq'}}
    ];

    clickable(index: number): void {
      this.isSearch  = false;
      if (index == 1) {
        this.isSearch = true;
      }
    }

    mounted(): void {
      this.isSearch = (window as any).location.hash == "#search";
    }

  }
</script>
<style  lang="scss">

  header {
    .v-toolbar__content {
      padding-left: 4px;
      padding-right: 4px;
    }
    
    .v-btn {
      font-weight: 700;

      &.theme--light {
        color: #8a8a8a;
      }      

      &:not(.v-btn--round).v-size--default {
        padding: 0 8px;
        min-width: 48px;
      }

      &:hover {
        color: #fd2d57;
      }

      &.v-btn--active {
        color: #fd2d57;

        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 6px;
          height: 6px;
          border: 3px solid #fd2d57;
          background: transparent;
          border-radius: 50%;
          box-sizing: content-box;        
          top: 10px;
          right: 1px;
        }
      }
    }
  }
  
</style>