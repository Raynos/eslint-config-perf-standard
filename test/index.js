'use strict';

var test = require('tape');

var eslintConfigPerfStandard = require('../index.js');

test('eslintConfigPerfStandard is a function', function t(assert) {
    assert.equal(typeof eslintConfigPerfStandard, 'function');
    assert.end();
});
