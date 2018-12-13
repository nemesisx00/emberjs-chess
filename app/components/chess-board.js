import Component from '@ember/component';
import GameLogic from '../utils/game-logic'

export default Component.extend({
	init()
	{
		this._super(...arguments)
		this.gameLogic = new GameLogic()
	},
	
	didRender()
	{
		if(!this.element.dataset.gameLogic)
			this.element.dataset.nextTurn = this.gameLogic.nextTurn
	},
	
	actions: {
		turnComplete()
		{
			this.gameLogic.toggleTurn()
			this.element.dataset.nextTurn = this.gameLogic.nextTurn
		}
	}
});
