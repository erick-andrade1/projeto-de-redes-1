import config from "../config";

const baseURL = config.BASE_API_URL;
//const baseURL = config.BASE_NETWORK_URL;

export default {
  name: "homeService",

  get: function () {
    return fetch(baseURL + 'home/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      if (response && response.status && response.status === 200) {
        return response.json();
      } else {
        return Promise.reject();
      }
    });
  },
};
