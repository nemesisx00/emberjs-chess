import GameLogic from 'chessgame/utils/game-logic'
import MovementProcessor from 'chessgame/utils/movement-processor'
import { module, test } from 'qunit'

module('Unit | Utility | game-logic', function(/*hooks*/) {
	
	test('Instantiation', assert => {
		let instance = new GameLogic()
		assert.ok(instance)
		assert.equal(instance.nextTurn, MovementProcessor.Colors.White)
	})
	
	test('Toggle Turn', assert => {
		let instance = new GameLogic()
		assert.equal(instance.nextTurn, MovementProcessor.Colors.White)
		instance.toggleTurn()
		assert.equal(instance.nextTurn, MovementProcessor.Colors.Black)
	})
})
