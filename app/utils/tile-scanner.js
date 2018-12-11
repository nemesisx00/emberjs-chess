import MovementProcessor from '../utils/movement-processor'

class TileScanner
{
	constructor()
	{
		this.mp = new MovementProcessor()
	}
	
	detectCollision(origin, destination)
	{
		this.mp.update(origin, destination)
		
		let out = false
		let tiles = []
		if(this.mp.isVertical)
		{
			let start = this.mp.oRank < this.mp.dRank ? this.mp.oRank : this.mp.dRank
			let end = this.mp.oRank > this.mp.dRank ? this.mp.oRank : this.mp.dRank
			
			for(let i = start; i < end; i++)
			{
				tiles.push(`${this.mp.oFile}${i}`)
			}
		}
		else if(this.mp.isHorizontal)
		{
			let oIndex = MovementProcessor.Files.indexOf(this.mp.oFile)
			let dIndex = MovementProcessor.Files.indexOf(this.mp.dFile)
			if(oIndex > -1 && dIndex > -1)
			{
				let start = oIndex > dIndex ? dIndex : oIndex
				let end = oIndex < dIndex ? dIndex : oIndex
				for(let i = start; i < end; i++)
				{
					tiles.push(`${MovementProcessor.Files[i]}${this.mp.oRank}`)
				}
			}
		}
		else if(this.mp.isDiagonal)
		{
			let oIndex = MovementProcessor.Files.indexOf(this.mp.oFile)
			let dIndex = MovementProcessor.Files.indexOf(this.mp.dFile)
			
			let rStep = this.mp.oRank > this.mp.dRank ? -1 : 1
			let fStep = oIndex > dIndex ? -1 : 1
			
			for(
				let r = this.mp.oRank, f = oIndex;
				(rStep > 0 ? (r < this.mp.dRank) : (r > this.mp.dRank));
				r = r + rStep, f = f + fStep
			)
			{
				tiles.push(`${MovementProcessor.Files[f]}${r}`)
			}
		}
		
		let originEl = document.querySelector(`#${origin} .piece`)
		for(let id of tiles)
		{
			let el = document.querySelector(`#${id} .piece`)
			out = el instanceof Element && el != originEl
			if(out)
				break
		}
		
		return out
	}
}

TileScanner.Instance = new TileScanner()

export default TileScanner
