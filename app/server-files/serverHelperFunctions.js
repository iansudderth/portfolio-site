const mongoSanitizer = require('mongo-sanitize');
const sanitizer = require('sanitizer');

function sanitizeString(str) {
  return mongoSanitizer(sanitizer.escape(str));
}

function validatePassword(password) {
  const validator = new RegExp(/^[\w\-\s]{4,42}$/);
  return validator.test(password);
}

module.exports.sanitizeString = sanitizeString;
module.exports.validatePassword = validatePassword;
