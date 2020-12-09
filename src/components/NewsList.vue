<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 class="card-wrapper" v-for="newsArticle in newsArticles" :key="newsArticle.id">
          <v-card elevation="0">
            <v-container fluid grid-list-lg>
              <v-layout row>

                <template v-if="newsArticle.image_list.length == 1">
                  <v-flex xs8>
                    <div>
                      <div class="subheading font-weight-medium">
                        {{ newsArticle.cat + ":" + newsArticle.title }}
                      </div>
                      <div class="article-sub-title"><span class="artile-where mr-2">{{newsArticle.where}}</span>{{ newsArticle.posted }}小时前</div>
                    </div>
                  </v-flex>
                  <v-flex xs4 class="img-flex">
                    <v-img
                    contain
                    :src="`/thumbnails/${newsArticle.image_list[0]}`"
                    :srcset="`/thumbnails/${newsArticle.image_list[0]}`"
                    width="100%"
                    transition="false"
                  ></v-img>
                  </v-flex>
                </template>

                <template v-else>
                  <v-flex xs12>                    
                      <div class="subheading font-weight-medium">
                        {{ newsArticle.cat + ":" + newsArticle.title }}
                      </div>
                  </v-flex>
                  
                    <div class="flex xs4 img-flex"  v-bind:key="key" v-for="(item, key) in newsArticle.image_list">
                      <v-img
                    contain
                    :src="`/thumbnails/${item}`"
                    :srcset="`/thumbnails/${item}`"
                    width="100%"
                    transition="false"
                  ></v-img>
                    </div>
                  
                  <v-flex xs12>
                    <div class="article-sub-title"><span class="artile-where mr-2">{{newsArticle.where}}</span>{{ newsArticle.posted }}小时前</div>
                  </v-flex>
                </template>

              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import newsService from '../services/newsService';  
  import { Getter } from 'vuex-class';
  import { ArticleType, NewsArticle } from '../types';

  @Component
  export default class NewsList extends Vue {
    @Getter("search", { namespace: 'topToolbar' }) search!: string;    
    newsArticles: NewsArticle[] = [];

    @Watch('search')
    onSearchChanged (val: string, oldVal: string) {
      if (val !== oldVal) {
        newsService.getArticlesByTypeandSearch(ArticleType.TopStory, this.search)
        .then((newsArticles: NewsArticle[]) => {
          this.newsArticles = newsArticles;
        });
      }
      
    }

    mounted() {
      console.log(this.search);
      newsService.getArticlesByTypeandSearch(ArticleType.TopStory, this.search)
        .then((newsArticles: NewsArticle[]) => {
          this.newsArticles = newsArticles;
        });
    }
  
  }
</script>

<style lang="scss">
  .flex.xs4.img-flex {
    padding: 1px!important;
  }

  .article-sub-title {
    font-size: 14px;
    color: #b4b4b4;

    .artile-where {
      color: #fd2d57;      
    }
  }

  .card-wrapper {
    border-bottom: 1px solid #eef1f3;
  }
</style>