export const isArray = (possibleArr) =>
  Object.prototype.toString.call(possibleArr) === '[object Array]';

export const isPresent = (val) =>
  val && val !== '' && val !== null && val !== undefined && val.length;

export const noop = () => {};

export const trimWhitespace = (string = '') =>
  string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

export const isAPromise = (promise) => {
  if (typeof promise === 'object') {
    return typeof promise.then === 'function';
  }

  return false;
};

export const removeSpaces = (str = '') =>
  str.replace(/\s+/g, '');
