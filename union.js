var union = require('union')
  , connect = require('./index');

exports = module.exports = function () {
  return new DummyApp(arguments);
}

for (key in connect) {
  if (key != 'createServer') {
    exports[key] = connect[key];
  }
}

var DummyApp = function () {
  this.server = null;
  this.middle = [];
  this.onError = null;
  this.request = exports.proto.request;
}

DummyApp.prototype.use = function (m) {
  if (typeof m == 'function' && m.length == 4) {
    this.onError = m;
  } else {
    this.middle.push(m);
  }
  return this;
}

DummyApp.prototype.emit = function (e, q, s) {
  var self = this;
  if (!this.server) {
    this.listen(0, function () {
      self.server.emit(e,q,s);
    });
  } else {
    this.server.emit(e,q,s);
  }
}

DummyApp.prototype.listen = function (port, callback) {
  this.server = union.createServer({
    buffer: false,
    before: this.middle,
    onError: this.onError
  });
  this.server.listen(port, callback);
  return this.server;
}