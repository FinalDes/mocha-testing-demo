const _ = require('lodash');

const alwaysTrue = () => true;
const legitString = o => _.isString(o);

module.exports = {
  alwaysTrue,
  legitString,
};

