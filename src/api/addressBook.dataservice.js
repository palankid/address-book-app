import axios from 'axios';
import { endpoints } from '../config/endpoints.config';

/**
 * Get list of users
 * @returns {Promise<Array>} Fetched users
 */
export const getUsers = () => {
  return axios.get(endpoints.users, {
    params: {
      results: 40,
      seed: 'addressbook',
      name: 'chadbowman'
    }
  }).then(response => response.data.results)
};
