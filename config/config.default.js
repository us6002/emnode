'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515747869973_8133';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: false,
  };

  return config;
};
