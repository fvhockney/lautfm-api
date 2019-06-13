"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const query = async function (url, params = {}) {
  const responseType = 'json';
  const timeout = 2000;
  const baseURL = 'https://api.laut.fm/';

  try {
    const response = await (0, _axios.default)({
      method: 'get',
      baseURL,
      url,
      responseType,
      params,
      timeout
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.query = query;