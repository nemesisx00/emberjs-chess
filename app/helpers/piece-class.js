import { helper } from '@ember/component/helper';

export function pieceClass(params/*, hash*/)
{
	let pieces = params[0]
	let key = params[1]
	
	return pieces[key].color
}

export default helper(pieceClass);
