import { ActionTree, Module, MutationTree, GetterTree } from 'vuex';
import { NewsArticle, RootState } from '../../types';

const state: NewsArticle[] = [];

export const getters: GetterTree<NewsArticle[], RootState> = {
  article: (theState: NewsArticle[]) => {
    return theState;
  }, 
};
 
const mutations: MutationTree<NewsArticle[]> = {
  setArticle(theState: NewsArticle[], article: NewsArticle[]) {
    return article;
  }
};

export const actions: ActionTree< NewsArticle[], RootState> = {
  changeArticle({commit}, article: NewsArticle[]) {
    commit('setArticle', article);
  }
};

export const articleList: Module<NewsArticle[], RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
