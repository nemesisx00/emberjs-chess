import MovementProcessor from 'chessgame/utils/movement-processor';
import { module, test } from 'qunit';

module('Unit | Utility | movement-processor', function(/*hooks*/) {
	
	test('directionalDistance - rank', assert => {
		let origin = 'A1'
		let destination = 'A2'
		let expected = 1
		let instance = new MovementProcessor(origin, destination)
		let result = instance.directionalDistance(true)
		
		assert.equal(result, expected)
	})
	
	test('directionalDistance - file', assert => {
		let origin = 'A1'
		let destination = 'B1'
		let expected = 1
		let instance = new MovementProcessor(origin, destination)
		let result = instance.directionalDistance()
		
		assert.equal(result, expected)
	})
});
