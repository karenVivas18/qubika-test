require('dotenv').config();

module.exports = {
  uiUrl: process.env.UI_URL,
  apiUrl: process.env.API_URL,
  testUser: {
    email: process.env.TEST_USER_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  },
};
