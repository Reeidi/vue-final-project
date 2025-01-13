import axiosAS from '@/config/axiosAS';

async function request(url, method, data) {
  try {
    const options = {
      url,
      method,
      data,
    };

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

export async function makeGetRequest(url) {
  return await request(url, 'get', undefined);
};

export async function makePostRequest(url, data) {
  return await request(url, 'post', data);
};
