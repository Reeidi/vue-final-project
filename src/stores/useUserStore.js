import * as userService from '@/services/userService'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null);
  const isUserLogged = computed(() => user.value?.email);

  async function login(credentials) {
    const userInfo = await userService.loginUser(credentials);
    if (!userInfo)
      return false;

    user.value = userInfo;
  };

  function logout() {
    user.value = null;
  };

  function getAuthToken() {
    return user.value?.token;
  };

  return {
    user,
    isUserLogged,
    login,
    logout,
    getAuthToken
  };
});
