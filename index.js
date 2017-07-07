_ = require('lodash');
alwaysTrue = () => true;
legitString = (o) => _.isString(o);

module.exports = {
    alwaysTrue,
    legitString
}

