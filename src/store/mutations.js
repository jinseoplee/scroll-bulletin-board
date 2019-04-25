import * as types from './mutations.type';

export default {
  [types.LIST.CATEGORY](state, category) {
    state.List.category.list[category.no] = category.name;
  },
  [types.LIST.POST_LIST](state, postList) {
    if (postList.length < 1) state.List.postList = [];
    state.List.postList.push(...postList);
  }
};