import Cookies from "js-cookie";

export function useCookies() {
  function getCookie(field) {
    return Cookies.get(field);
  }

  function setCookie(name, value, expiresInMins) {
    const expiresIn = new Date(new Date().getTime() + expiresInMins * 60 * 1000);
    Cookies.set(name, value, { expires: expiresIn });
  }

  return {
    getCookie,
    setCookie
  };
};
