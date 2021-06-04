/* eslint-disable */

import Vue from 'vue';
const axios = require('axios');

Vue.prototype.get = async (url) => {
  try {
    let code = '';
    let data = '';
    let message = '';
    await axios
      .get(url)
      .then((response) => {
        if (code == 401) {
          code = response.status;
          data = response.data;
          message = 'access deny';
          alert(`เกิดข้อผิดพลาดของ token กรุณา Login ใหม่`);
          window.localStorage.clear();
          return next({ name: 'Login' })
        } else {
          code = response.status;
          data = response.data;
          message = 'access pass';
        }
      })
      .catch((err) => {
        code = err.response.status;
        data = err.response.data;
        message = 'error';
        console.log('err', err);
        if (code == 401) {
          alert(`เกิดข้อผิดพลาดของ token กรุณา Login ใหม่`);
          window.localStorage.clear();
          return window.location.href = '/login'
        }
      });
    return { status: code, data: data, message: message };
  } catch (err) {
    console.log(err);
    return err;
  }
};



export default Vue;
