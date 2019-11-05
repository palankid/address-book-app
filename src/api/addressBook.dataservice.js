import axios from 'axios';

import { endpoints } from '../config/endpoints.config';
import { PAGE_SIZE, SEED_NAME } from '../config/app.config';

/**
 * Fetch list of users
 * @param {String} nat - Nationality
 * @param {Number} page - Current page number
 * @returns {Promise<Array>} Fetched users
 */
const fetchUsers = (nat, page) => {
  return axios.get(endpoints.users, {
    params: {
      nat,
      page,
      results: PAGE_SIZE,
      seed: SEED_NAME
    }
  }).then(response => response.data.results)
};

export default {
  fetchUsers
}
