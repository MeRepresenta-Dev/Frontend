import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://nodejs-app-dev-load-balancer-889457599.us-east-1.elb.amazonaws.com:3000',
});

export default api;
