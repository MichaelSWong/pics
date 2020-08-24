import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID QVg1yDY46EEE2i6BiVZcmtEmTTFdLSoowEqJupY3a0s',
  },
});
