import { ArticleType, NewsArticle } from '../types';

const url = '/data/articles.json';

class NewsService {

  getArticlesByTypeandSearch(articleType: ArticleType, search: string): Promise<NewsArticle[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {

        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.articleType === articleType && serverArticle.title.indexOf(search) >= 0)
          .map(this.map);
        console.log(newsArticles);
        return newsArticles;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the news articles from ' + url, e);
      })
  }

  

  private map(serverArticle: any): NewsArticle {
    return {
      id: serverArticle.id,
      title: serverArticle.title,
      content: serverArticle.content,
      posted: serverArticle.posted,
      image_list: serverArticle.image_list,
      where: serverArticle.where,
      articleType: serverArticle.articleType,
      cat: serverArticle.cat,
      isFavourite: serverArticle.isFavourite
    } as NewsArticle;
  }

}

export default new NewsService();