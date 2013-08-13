# rangebound

given a number or a string, returns the ranges you should be querying in the default js string collation

``` js
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
```