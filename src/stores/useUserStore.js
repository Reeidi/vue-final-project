import { useCookies } from '@/composables/useCookies';
import * as userService from '@/services/userService'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null);
  const isUserLogged = computed(() => user.value?.email);
  const cookies = useCookies();

  async function login(credentials) {
    const userInfo = await userService.loginUser(credentials);
    if (!userInfo)
      return false;

    user.value = userInfo;
    cookies.setCookie('user', JSON.stringify(userInfo), 30);

    return true;
  };

  function logout() {
    user.value = null;
    cookies.setCookie('user', null, 30);
  };

  function getAuthToken() {
    return user.value?.token;
  };

  async function reAuthUser() {
    if (user.value != null)
      return false;

    const persistedUserString = cookies.getCookie('user');
    const persistedUser = JSON.parse(persistedUserString);
    if (!persistedUser)
      return false;

    user.value = persistedUser;
    return true;
  };

  return {
    user,
    isUserLogged,
    login,
    logout,
    getAuthToken,
    reAuthUser
  };
});
