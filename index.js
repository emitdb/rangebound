module.exports = function (value) {
  return isNaN(value) ? {
    start: value,
    end: (value + '\ufff0'),
    type: 'string'
  } : {
    start: value,
    end: value + '\u0000',
    type: 'number'
  };
};
