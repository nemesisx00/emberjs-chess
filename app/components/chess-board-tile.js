import Component from '@ember/component';

function cancel(e)
{
	e.preventDefault()
	return false
}

export default Component.extend({
	classNames: [ 'file' ],
	
	piece: null,
	
	dragEnter: cancel,
	dragOver: cancel,
	
	drop(e)
	{
		let pieceId = e.originalEvent.dataTransfer.getData('text/plain')
		if(pieceId)
		{
			let el = document.querySelector(`#${pieceId}`)
			if(el)
				this.element.appendChild(el)
		}
		
		e.preventDefault()
		return false
	}
});
