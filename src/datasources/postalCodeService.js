import axios from 'axios';

const API_URL = 'https://postalcodes.interaktiv.sg';

export const methodService = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const config = {
  baseURL: API_URL,
  timeout: 10000,
}

const getHeaders = async (isMultipart) => {
  return {
    Accept: 'application/json',
    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
  }
}

const instance = axios.create(config);

instance.interceptors.request.use(async request => {
  request.headers = getHeaders(request.multipart)
  return request;
})

export const apiService = async (url, method, data, params, multipart = false) => {
  const service = await instance({
    url: url,
    method: method,
    data: data,
    params: params,
    timeout: 60000,
    multipart
  });
  return service;
};
