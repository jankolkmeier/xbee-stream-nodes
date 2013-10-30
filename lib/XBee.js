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
exports.XBee = XBee;
exports.Node = require('./Node');

var _options = {
  
};

function XBee(options) {
  if (!(this instanceof XBee))
    return new XBee(options);
  stream.Duplex.call(this);

  // Dict of all (known) nodes
  this.nodes = {};
}
util.inherits(XBee, stream.Duplex);

XBee.prototype.AT = function(command, commandParameters, cb) {
  // TODO
};

XBee.prototype.remoteAT = function(command, destination64, destination16, 
  commandParameters, remoteCommandOptions,  cb) {
  // TODO
};

XBee.prototype.transmissionRequest = function(data, destination64, 
  destination16, broadcastRadius, options, cb) {
  // TODO
};


XBee.prototype._write = function(obj, encoding, next) {
  //this.writeFcn(this.xbeeAPI.buildFrame(obj), next);
};

XBee.prototype._read = function() {
  //this.reading = true;
  //while (this.queue.length > 0 && this.reading) {
  //  this.reading = this.push(this.queue.shift());
  //}
};

XBee.prototype.close = function() {
  //this.push(null);
};