import Component from '@ember/component';
import MovementProcessor from '../utils/movement-processor'
import TileScanner from '../utils/tile-scanner';

function cancel(e)
{
	e.preventDefault()
	return false
}

export default Component.extend({
	classNames: [ 'file' ],
	classNameBindings: [ 'alt' ],
	
	alt: false,
	
	dragEnter: cancel,
	dragOver: cancel,
	
	drop(e)
	{
		let json = JSON.parse(e.dataTransfer.getData('text/plain'))
		
		let pieceId = json.elementId
		if(pieceId)
		{
			let el = document.querySelector(`#${pieceId}`)
			if(el)
			{
				let origin = el.parentElement.id
				let destination = this.elementId
				
				if(
					MovementProcessor.Instance.validateMove(el.dataset.piece, el.dataset.color, origin, destination, json.firstMove)
					&& !TileScanner.Instance.detectCollision(origin, destination)
					&& this.element.children.length < 1
				)
				{
					this.element.appendChild(el)
				}
			}
		}
		
		e.preventDefault()
		return false
	}
});
