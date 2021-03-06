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

exports = module.exports;

_XBee = require('./XBee');

exports.XBee = _XBee.XBee;
exports.Node = _XBee.Node;