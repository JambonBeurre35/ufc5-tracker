'use strict';

import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Change to your API base URL

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default client;