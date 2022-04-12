import config from "../config";

const baseURL = config.BASE_API_URL;
//const baseURL = config.BASE_NETWORK_URL;

export default {
  name: "homeService",

  get: function (id) {
    return fetch(baseURL + "home/" + id, {
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

  post: function (data) {
    return fetch(baseURL + "home/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: data.message,
        messageDate: data.messageDate,
      }),
    }).then(function (response) {
      if (response && response.status && response.status === 200) {
        return response.json();
      } else {
        return Promise.reject();
      }
    });
  },
};
