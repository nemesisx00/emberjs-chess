import Component from '@ember/component';
import MovementProcessor from '../utils/movement-processor'

export default Component.extend({
	attributeBindings: ['draggable'],
	draggable: 'true',
	
	classNames: [ 'piece' ],
	classNameBindings: ['dragging'],
	dragging: false,
	
	firstMove: null,
	
	board: document.querySelector('#board'),
	
	didRender()
	{
		this.element.dataset.piece = this.element.innerHTML.trim()
		this.element.dataset.color = this.element.className.indexOf(MovementProcessor.Colors.Black) > -1
			? MovementProcessor.Colors.Black
			: MovementProcessor.Colors.White
		
		this.firstMove = (this.firstMove === null)
	},
	
	dragStart(e)
	{
		if(this.board.dataset.nextTurn == this.element.dataset.color)
		{
			e.dataTransfer.dropEffect = 'move'
			e.dataTransfer.setData('text/plain', JSON.stringify({ elementId: this.elementId, firstMove: this.firstMove }))
			this.set('dragging', true)
		}
		else
		{
			this.set('dragging', false)
			e.preventDefault()
		}


	},
	
	dragEnd()
	{
		this.set('dragging', false)
	}
});
