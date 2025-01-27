const axios = require('axios');
const { apiUrl } = require('../utils/environment');

module.exports = {
  async createUser(userData) {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, userData);
      if (response.status === 200) {
        console.log('User created successfully:', response.data);
        return response.data;
      }
    } catch (error) {
      console.error('Error creating user:', error.response?.data || error.message);
      throw error;
    }
  },

  handleStatusCode(status) {
    switch (status) {
      case 200:
        return 'OK';
      case 400:
        throw new Error('Bad Request: Check the request payload.');
      case 404:
        throw new Error('Not Found: The requested resource does not exist.');
      case 500:
        throw new Error('Internal Server Error: Please try again later.');
      default:
        return 'Unhandled status code.';
    }
  },
};