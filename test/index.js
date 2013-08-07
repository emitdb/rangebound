var rangebound = require('../'),
  assert = require('assert');

assert.deepEqual(rangebound('foo'), {
  start: 'foo',
  type: 'string',
  end: 'foo' + '\ufff0'
});

assert.deepEqual(rangebound(1), {
  start: '1',
  type: 'number',
  end: '1' + '\u0000'
});

assert.deepEqual(rangebound('1'), {
  start: '1',
  type: 'number',
  end: '1' + '\u0000'
});

assert.deepEqual(rangebound(), {
  start: undefined,
  type: 'string',
  end: undefined + '\ufff0'
});

console.log('ok');
