import Component from '@ember/component';

export default Component.extend({
	attributeBindings: ['draggable'],
	classNames: [ 'piece' ],
	classNameBindings: ['dragging'],
	
	draggable: 'true',
	
	dragging: false,
	
	dragStart(e)
	{
		let dataTransfer = e.originalEvent.dataTransfer
		dataTransfer.dropEffect = 'move'
		
		dataTransfer.setData('text/plain', this.elementId)
		this.dragging = true
	},
	
	dragEnd(e)
	{
		this.dragging = false
	}
});
