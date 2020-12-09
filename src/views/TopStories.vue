<template>

  <div>
    <NewsList ></NewsList>
  </div>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import newsService from '../services/newsService';
  import NewsList from '../components/NewsList.vue';
  import { ArticleType, NewsArticle } from '../types';
 

  @Component({
    components: {
      NewsList
    }
  })
  export default class TopStories extends Vue {
    

    // @Watch('search')
    // newsArticles: NewsArticle[] = [];
    

    // mounted() {
    //   console.log(this.search);
    //   newsService.getArticlesByTypeandSearch(ArticleType.TopStory, this.search)
    //     .then((newsArticles: NewsArticle[]) => {
    //       this.newsArticles = newsArticles;
    //     });
    // }
  }
</script>
