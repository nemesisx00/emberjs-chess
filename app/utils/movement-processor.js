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

function directionalDistance(origin, destination, isRank)
{
	let [oFile, oRank] = origin.split('')
	let [dFile, dRank] = destination.split('')
	
	let oIndex = null
	let dIndex = null
	if(isRank === true)
	{
		oIndex = Number.parseInt(oRank)
		dIndex = Number.parseInt(dRank)
	}
	else
	{
		oIndex = Files.indexOf(oFile)
		dIndex = Files.indexOf(dFile)
	}
	
	return oIndex > dIndex ? oIndex - dIndex : dIndex - oIndex
}

function isHorizontal(origin, destination)
{
	let fileDistance = directionalDistance(origin, destination)
	let rankDistance = directionalDistance(origin, destination, true)
	
	return fileDistance > 0 && rankDistance == 0
}

function isVertical(origin, destination)
{
	let fileDistance = directionalDistance(origin, destination)
	let rankDistance = directionalDistance(origin, destination, true)
	
	return fileDistance == 0 && rankDistance > 0
}

function isDiagonal(origin, destination)
{
	let fileDistance = directionalDistance(origin, destination)
	let rankDistance = directionalDistance(origin, destination, true)
	
	return fileDistance == rankDistance
}

class MovementProcessor
{
	static validateMove(piece, color, origin, destination)
	{
		let out = false
		
		switch(piece)
		{
		case Pieces.Bishop:
			out = isDiagonal(origin, destination)
			break
		case Pieces.King:
			out = (directionalDistance(origin, destination) == 1 && directionalDistance(origin, destination, true) == 0)
					|| (directionalDistance(origin, destination) == 0 && directionalDistance(origin, destination, true) == 1)
					|| (directionalDistance(origin, destination) == 1 && directionalDistance(origin, destination, true) == 1)
			break
		case Pieces.Knight:
			out = (directionalDistance(origin, destination) == 2 && directionalDistance(origin, destination, true) == 1)
					|| (directionalDistance(origin, destination) == 1 && directionalDistance(origin, destination, true) == 2)
			break
		case Pieces.Pawn:
			out = isVertical(origin, destination)
					&& directionalDistance(origin, destination, true) == 1
					&& (
						(color == Colors.Black && origin.substring(1, 2) > destination.substring(1, 2))
						|| (color == Colors.White && origin.substring(1, 2) > destination.substring(1, 2))
					)
			break
		case Pieces.Queen:
			out = isVertical(origin, destination) && !isHorizontal(origin, destination) && !isDiagonal(origin, destination)
					|| !isVertical(origin, destination) && isHorizontal(origin, destination) && !isDiagonal(origin, destination)
					|| !isVertical(origin, destination) && !isHorizontal(origin, destination) && isDiagonal(origin, destination)
			break
		case Pieces.Rook:
			out = isVertical(origin, destination) && !isHorizontal(origin, destination) && !isDiagonal(origin, destination)
					|| !isVertical(origin, destination) && isHorizontal(origin, destination) && !isDiagonal(origin, destination)
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

export default MovementProcessor
