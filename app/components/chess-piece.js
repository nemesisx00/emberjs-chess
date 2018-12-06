import Component from '@ember/component';
import MovementProcessor from '../utils/movement-processor'

export default Component.extend({
	attributeBindings: ['draggable'],
	draggable: 'true',
	
	classNames: [ 'piece' ],
	classNameBindings: ['dragging'],
	dragging: false,
	
	didRender()
	{
		this.element.dataset.piece = this.element.innerHTML.trim()
		this.element.dataset.color = this.element.className.indexOf(MovementProcessor.Colors.Black) > -1
									? MovementProcessor.Colors.Black
									: MovementProcessor.Colors.White
	},
	
	dragStart(e)
	{
		e.dataTransfer.dropEffect = 'move'
		e.dataTransfer.setData('text/plain', this.elementId)
		this.set('dragging', true)
	},
	
	dragEnd(e)
	{
		this.set('dragging', false)
	}
});
