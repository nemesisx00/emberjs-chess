const Colors = Object.freeze({
	Black: 'black',
	White: 'white'
})

const Pieces = Object.freeze({
	Bishop: 'B',
	King: 'K',
	Knight: 'Kn',
	Pawn: 'P',
	Queen: 'Q',
	Rook: 'R'
})

const Ranks = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8])
const Files = Object.freeze(['A','B','C','D','E','F','G','H'])

const KingMoves = [
	[1, 0],
	[0, 1],
	[1, 1]
]

const KnightMoves = [
	[1, 2],
	[2, 1]
]

class MovementProcessor
{
	constructor(origin, destination)
	{
		this.origin = null
		this.destination = null
		this.oFile = null
		this.oRank = null
		this.dFile = null
		this.dRank = null
		this.fileDistance = null
		this.rankDistance = null
		
		this.update(origin, destination)
	}
	
	get isHorizontal() { return this.fileDistance > 0 && this.rankDistance == 0 }
	get isVertical() { return this.fileDistance == 0 && this.rankDistance > 0 }
	get isDiagonal() { return this.fileDistance == this.rankDistance }
	
	update(origin, destination)
	{
		this.origin = origin
		this.destination = destination
		
		if(this.origin && this.destination)
		{
			let [oFile, oRank] = this.origin.split('')
			let [dFile, dRank] = this.destination.split('')
			
			this.oFile = oFile
			this.oRank = Number.parseInt(oRank)
			this.dFile = dFile
			this.dRank = Number.parseInt(dRank)
			
			this.fileDistance = this.directionalDistance()
			this.rankDistance = this.directionalDistance(true)
		}
	}
	
	directionalDistance(isRank)
	{
		let oIndex = null
		let dIndex = null
		if(isRank === true)
		{
			oIndex = Number.parseInt(this.oRank)
			dIndex = Number.parseInt(this.dRank)
		}
		else
		{
			oIndex = Files.indexOf(this.oFile)
			dIndex = Files.indexOf(this.dFile)
		}
		
		return oIndex > dIndex ? oIndex - dIndex : dIndex - oIndex
	}
	
	validateMove(piece, color, origin, destination, firstMove)
	{
		let out = false
		
		if(origin && destination)
			this.update(origin, destination)
		
		switch(piece)
		{
			case Pieces.Bishop:
				out = this.isDiagonal
				break
			case Pieces.King:
				out = KingMoves.find(arr => arr[0] == this.fileDistance && arr[1] == this.rankDistance)
				break
			case Pieces.Knight:
				out = KnightMoves.find(arr => arr[0] == this.fileDistance && arr[1] == this.rankDistance)
				break
			case Pieces.Pawn:
				out = this.isVertical
						&& (
							this.rankDistance == 1
							|| (firstMove === true && this.rankDistance == 2)
						)
						&& (
							(color == Colors.Black && this.oRank > this.dRank)
							|| (color == Colors.White && this.oRank < this.dRank)
						)
				break
			case Pieces.Queen:
				out = this.isVertical && !this.isHorizontal && !this.isDiagonal
						|| !this.isVertical && this.isHorizontal && !this.isDiagonal
						|| !this.isVertical && !this.isHorizontal && this.isDiagonal
				break
			case Pieces.Rook:
				out = !this.isDiagonal
					&& (
						(this.isVertical && !this.isHorizontal)
						|| (!this.isVertical && this.isHorizontal)
					)
				break
			default:
				break
		}
		
		return out
	}
}

MovementProcessor.Colors = Colors
MovementProcessor.Files = Files
MovementProcessor.Pieces = Pieces
MovementProcessor.Ranks = Ranks
MovementProcessor.Instance = new MovementProcessor()

export default MovementProcessor
