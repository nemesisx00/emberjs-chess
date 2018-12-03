import Component from '@ember/component';

export default Component.extend({
	classNames: [ 'file' ],
	
	piece: null,
	
	dragOver(e)
	{
		e.preventDefault()
		return false
	},
	
	drop(e)
	{
		e.preventDefault()
		
		let id = e.dataTransfer.getData('text/plain')
		console.log(id)
		
		let el = document.querySelector(`#${id}`)
		console.log(el)
		this.element.appendChild(el)
		
		return false
	}
});
