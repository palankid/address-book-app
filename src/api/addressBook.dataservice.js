import axios from 'axios';
import { endpoints } from '../config/endpoints.config';

/**
 * Get list of users
 * @param {Number} [page=1] - Current page number
 * @param {Number} [results=50] - Page size
 * @returns {Promise<Array>} Fetched users
 */
export const getUsers = (page = 1, results = 50) => {
  return axios.get(endpoints.users, {
    params: {
      page,
      results,
      seed: 'addressbook'
    }
  }).then(response => response.data.results)
};
