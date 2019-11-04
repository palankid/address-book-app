import axios from 'axios';
import { endpoints } from '../config/endpoints.config';
import { PAGE_SIZE } from '../config/app.config';

/**
 * Get list of users
 * @param {Number} nat - Nationality
 * @param {Number} [page=1] - Current page number
 * @returns {Promise<Array>} Fetched users
 */
export const getUsers = (nat, page = 1) => {
  return axios.get(endpoints.users, {
    params: {
      nat,
      page,
      results: PAGE_SIZE,
      seed: 'addressbook'
    }
  }).then(response => response.data.results)
};
