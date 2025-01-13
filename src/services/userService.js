import { loginUserUrl, registerUserUrl } from '@/config/constants'
import { makePostRequest } from '@/helpers/serverCommunication'

export async function registerUser(userInfo) {
  return await makePostRequest(registerUserUrl, userInfo);
}

export async function loginUser(credentials) {
  const result = await makePostRequest(loginUserUrl, credentials);

  if (result['user'] && result['token']) {
    let userInfo = {
      _id: result.user._id,
      email: result.user.email,
      firstName: result.user.firstName,
      lastName: result.user.lastName,
      age: result.user.age,
      token: result.token,
    };

    return userInfo;
  }

  return null;
}
