export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  posted: string;
  image_list: string[];
  where: string;
  articleType: ArticleType;
  cat: string;
  isFavourite: boolean;
}

export enum ArticleType {
  TopStory = 'TOP_STORY',
  
}


// Store root state
export interface RootState {
  topToolbar: TopToolbarState;
}

// Store modules state
export interface TopToolbarState {
  title: string;
  search: string;
}

