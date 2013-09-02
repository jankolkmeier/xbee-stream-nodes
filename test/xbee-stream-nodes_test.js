/*
 * xbee-stream-nodes
 * https://github.com/jouz/xbee-stream-nodes
 *
 * Copyright (c) 2013 Jan Kolkmeier
 * Licensed under the MIT license.
 */

'use strict';

var xbee_stream = require('xbee-stream');
var xbee_stream_nodes = require('../lib/xbee-stream-nodes.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['todo'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  tearDown: function(done) {
    done();
  },
  'todo': function(test) {
    test.expect(0);

    test.done();
  },
};
