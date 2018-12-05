import { helper } from '@ember/component/helper';

export function pieceContent(params/*, hash*/)
{
	let pieces = params[0]
	let key = params[1]
	
	let out = ''
	switch(pieces[key].piece)
	{
		case 'rook':
			out = 'R'
			break
		case 'knight':
			out = 'Kn'
			break
		case 'bishop':
			out = 'B'
			break
		case 'king':
			out = 'K'
			break
		case 'queen':
			out = 'Q'
			break
		default:
			out = 'P'
			break
	}
	
	return out
}

export default helper(pieceContent);
