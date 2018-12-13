import MovementProcessor from '../utils/movement-processor'

class GameLogic
{
	constructor(nextTurn)
	{
		this._nextTurn = MovementProcessor.Colors.White
		
		if(nextTurn == MovementProcessor.Colors.Black)
			this._nextTurn = MovementProcessor.Colors.Black
	}
	
	get nextTurn() { return this._nextTurn }
	
	toggleTurn()
	{
		if(this._nextTurn == MovementProcessor.Colors.White)
			this._nextTurn = MovementProcessor.Colors.Black
		else
			this._nextTurn = MovementProcessor.Colors.White
	}
}

export default GameLogic
