var test = require('tape');
var key = require('../');

test('some keys', function(assert) {
   
	assert.equal(key('C-2'), 0);
	assert.equal(key('C0'), 24);

	assert.equal(key('Cb1'), 35);
	assert.equal(key('C1'), 36);
	assert.equal(key('C#1'), 37);
	
	assert.end();

});
