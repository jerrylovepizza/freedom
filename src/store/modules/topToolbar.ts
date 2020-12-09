import { ActionTree, Module, MutationTree, GetterTree } from 'vuex';
import { TopToolbarState, RootState } from '../../types';

const state: TopToolbarState = {
  title: '新闻',
  search: '',
};

export const getters: GetterTree<TopToolbarState, RootState> = {
  title: (theState: TopToolbarState) => {
    return theState.title;
  },
  search: (theState: TopToolbarState)=> {
    return theState.search;
  }
};
 
const mutations: MutationTree<TopToolbarState> = {
  setTitle(theState: TopToolbarState, title: string) {
    theState.title = title;
  },

  setSearch(theState: TopToolbarState, search: string) {
    theState.search = search;
  }

};

export const actions: ActionTree<TopToolbarState, RootState> = {
  changeTitle({commit}, title: string) {
    commit('setTitle', title);
  },
  changeSearch({commit}, search: string) {
    commit('setSearch', search);
  }
};

export const topToolbar: Module<TopToolbarState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
