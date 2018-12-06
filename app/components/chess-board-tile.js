import Component from '@ember/component';
import MovementProcessor from '../utils/movement-processor'

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
		let pieceId = e.dataTransfer.getData('text/plain')
		if(pieceId)
		{
			let el = document.querySelector(`#${pieceId}`)
			if(el)
			{
				let origin = el.parentElement.id
				let destination = this.elementId
				
				if(MovementProcessor.validateMove(el.dataset.piece, el.dataset.color, origin, destination))
				{
					if(this.element.children.length < 1)
						this.element.appendChild(el)
				}
			}
		}
		
		e.preventDefault()
		return false
	}
});
