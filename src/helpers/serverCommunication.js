import axiosAS from '@/config/axiosAS';
import { useUserStore } from '@/stores/useUserStore';

async function request(url, method, data, authToken) {
  try {
    const options = {
      url,
      method,
      data,
      headers: {}
    };

    if (authToken != null) {
      options.headers['X-Authorization'] = authToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await axiosAS(options);
    if (response.status !== 200) {
      console.log('error making request!');
      return undefined;
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export async function makeGetRequest(url, authToken = null) {
  return await request(url, 'get', undefined, authToken);
};

export async function makePostRequest(url, data, authToken = null) {
  return await request(url, 'post', data, authToken);
};

export async function makeDeleteRequest(url, authToken = null) {
  return await request(url, 'delete', undefined, authToken);
}
