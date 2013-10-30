/*
 * xbee-stream-nodes
 * https://github.com/jouz/xbee-stream-nodes
 *
 * Copyright (c) 2013 Jan Kolkmeier
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');
var stream = require('stream');

exports = module.exports = Node;

var _options = {
  
};

function Node(options) {
  if (!(this instanceof Node))
    return new Node(options);
  stream.Duplex.call(this);

}
util.inherits(Node, stream.Duplex);