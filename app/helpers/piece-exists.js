import { helper } from '@ember/component/helper';

export function pieceExists(params/*, hash*/)
{
	let pieces = params[0]
	let key = params[1]
	
	return pieces && key && pieces[key]
}

export default helper(pieceExists);
