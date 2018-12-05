import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			ranks: [8, 7, 6, 5, 4, 3, 2, 1],
			files: ['A','B','C','D','E','F','G','H'],
			pieces: {
				A1: { piece: 'rook', color: 'white' },
				A2: { piece: 'pawn', color: 'white' },
				A7: { piece: 'pawn', color: 'black' },
				A8: { piece: 'rook', color: 'black' },
				
				B1: { piece: 'knight', color: 'white' },
				B2: { piece: 'pawn', color: 'white' },
				B7: { piece: 'pawn', color: 'black' },
				B8: { piece: 'knight', color: 'black' },
				
				C1: { piece: 'bishop', color: 'white' },
				C2: { piece: 'pawn', color: 'white' },
				C7: { piece: 'pawn', color: 'black' },
				C8: { piece: 'bishop', color: 'black' },
				
				D1: { piece: 'king', color: 'white' },
				D2: { piece: 'pawn', color: 'white' },
				D7: { piece: 'pawn', color: 'black' },
				D8: { piece: 'king', color: 'black' },
				
				E1: { piece: 'queen', color: 'white' },
				E2: { piece: 'pawn', color: 'white' },
				E7: { piece: 'pawn', color: 'black' },
				E8: { piece: 'queen', color: 'black' },
				
				F1: { piece: 'bishop', color: 'white' },
				F2: { piece: 'pawn', color: 'white' },
				F7: { piece: 'pawn', color: 'black' },
				F8: { piece: 'bishop', color: 'black' },
				
				G1: { piece: 'knight', color: 'white' },
				G2: { piece: 'pawn', color: 'white' },
				G7: { piece: 'pawn', color: 'black' },
				G8: { piece: 'knight', color: 'black' },
				
				H1: { piece: 'rook', color: 'white' },
				H2: { piece: 'pawn', color: 'white' },
				H7: { piece: 'pawn', color: 'black' },
				H8: { piece: 'rook', color: 'black' }
			}
		}
	}
});
