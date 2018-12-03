import Component from '@ember/component';

export default Component.extend({
	classNames: [ 'piece' ],
	attributeBindings: ['draggable'],
	draggable: 'true',
	
	drag(e)
	{
		e.dataTransfer.setData('text/plain', this.elementId)
	}
});
