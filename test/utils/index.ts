import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  public static readonly baseURL = 'http://127.0.0.1:3000';
  public readonly instance: AxiosInstance;
  public constructor() {
    this.instance = this.getAxios();
  }

  public static getAxios(baseURL: string = this.baseURL, headers = {}) {
    const instance = axios.create({
      baseURL: baseURL,
      headers: headers,
    });

    instance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error.response);
      },
    );

    return instance;
  }

  public getAxios() {
    return HttpClient.getAxios();
  }
}
