import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  ResponseType,
} from 'axios';

interface Process {
  env: { [key: string]: string };
}
declare let process: Process;

export const BASE_URL = 'https://api.ninehire.com';

export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  query?: { [key: string]: string | number | boolean | string[] };
  responseType?: ResponseType;
  accessToken?: any;
}

const apiRequest = async <T>({
  url,
  method,
  headers,
  body,
  query,
  responseType,
  accessToken,
}: ApiOption): Promise<T> => {
  let token = accessToken ? accessToken : null;

  let response: AxiosResponse<T>;

  try {
    const requestConfig: AxiosRequestConfig = {
      baseURL: BASE_URL,
      url,
      method,
      data: body,
      params: query,
      responseType: responseType || 'text',
    };
    requestConfig.headers = headers ? { ...headers } : {};
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    response = await axios.request<T>(requestConfig);
  } catch (e) {
    const err: AxiosError = e;
    const { response, request } = err;
    console.log(e);

    if (response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = response;

      if (status >= 500) {
        throw new Error('server error');
      } else if (status >= 400) {
        throw new Error(data.message);
      }
    } else if (request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      throw new Error('server response not exist');
    } else {
      throw new Error('axios config error');
    }
  }
  return response.data;
};

export default apiRequest;
