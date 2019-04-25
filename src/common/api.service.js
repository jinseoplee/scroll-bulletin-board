import { API_URL } from './config';
import axios from 'axios';

export default {

  /**
   * 카테고리 조회
   */
  getCategoryAPI() {
    return axios.get(`${API_URL}/category.php`);
  },

  /**
   * 게시글 조회
   * @param {*} page 페이지 번호
   * @param {*} ord 정렬
   * @param {*} category 카테고리
   */
  getPostListAPI(params) {
    return axios.get(`${API_URL}/request.php`, { params });
  },

  /**
   * 게시글 상세 조회
   * @param {*} req_no 페이지 번호 
   */
  getPostDetailAPI(params) {
    return axios.get(`${API_URL}/detail.php`, { params });
  },

  /**
   * 광고 목록 조회
   * @param {*} page 페이지 번호
   * @param {*} limit 항목 수 제한
   */
  getAdsListAPI(params) {
    return axios.get(`${API_URL}/ads.php`, { params });
  }
};