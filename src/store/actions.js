import { LIST } from './mutations.type';
import api from '../common/api.service';

const mixArray = (post, ads) => {
  const totalLength = post.length + ads.length;
  const result = [];
  let [postIdx, adsIdx] = [0, 0];
  for (let i = 0; i < totalLength; i += 1) {
    if ((i + 1) % 4 !== 0) {
      // 게시글
      if (post[postIdx]) {
        post[postIdx].itemType = 0;
        result.push(post[postIdx]);
        postIdx += 1;
      }
    } else {
      // 광고
      if (ads[adsIdx]) {
        ads[adsIdx].itemType = 1;
        result.push(ads[adsIdx]);
        adsIdx += 1;
      }
    }
  }
  return result;
};

export default {
  async getCategoryAPI(store) {
    try {
      const response = await api.getCategoryAPI();
      for (const item of response.data.list) {
        store.commit(LIST.CATEGORY, item);
      }
      return response.data;
    } catch (error) {
      throw new Error(`getCategoryAPI Error ${error}`);
    }
  },
  async getPostListAPI(store, params) {
    try {
      const post = await api.getPostListAPI(params.post);
      const ads = await api.getAdsListAPI(params.ads);
      const result = mixArray(post.data.list, ads.data.list);
      store.commit(LIST.POST_LIST, result);
      return result;
    } catch (error) {
      throw new Error(`getPostList Error ${error}`);
    }
  },
  async getPostDetailAPI(store, params) {
    try {
      const response = await api.getPostDetailAPI(params);
      return response.data.detail;
    } catch (error) {
      throw new Error(`getPostDetailAPI Error ${error}`);
    }
  }
};