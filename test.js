var assert = require('assert');
var _inherits = require('./');

function Collection () {
  this.models = [];
}

Collection.prototype.add = function (model) {
  this.models.push(model);
};

_inherits(Collection.prototype);

var models = [
  { name: 'a', group: 'first' },
  { name: 'b', group: 'second' },
  { name: 'c', group: 'first' }
];

var collection = new Collection;

models.forEach(function (model) {
  collection.add(model);
});

var grouped = collection.groupBy('group');

assert(grouped.first);
assert(grouped.second);
assert(grouped.first.length == 2);
assert(grouped.second.length == 1);
