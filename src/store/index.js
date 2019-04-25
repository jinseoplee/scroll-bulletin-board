import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations'
import actions from './actions';

Vue.use(Vuex);

const List = {
  category: {
    list: {}
  },
  postList: []
};

export default new Vuex.Store({
  state: {
    List
  },
  getters,
  mutations,
  actions
});