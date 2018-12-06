import { helper } from '@ember/component/helper';

export function pieceContent(params/*, hash*/)
{
	let pieces = params[0]
	let key = params[1]
	
	let out = ''
	if(pieces[key])
		out = pieces[key].piece
	
	return out
}

export default helper(pieceContent);
