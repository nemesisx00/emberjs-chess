import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			ranks: [8, 7, 6, 5, 4, 3, 2, 1],
			files: ['A','B','C','D','E','F','G','H'],
			pieces: {
				white: [
					{ piece: 'king', cells: [ 'D1' ] },
					{ piece: 'queen', cells: [ 'E1' ] },
					{ piece: 'bishop', cells: [ 'C1', 'F1' ] },
					{ piece: 'knight', cells: [ 'B1', 'G1' ]},
					{ piece: 'rook', cells: [ 'A1', 'H1' ]},
					{
						piece: 'pawn',
						cells: [ 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2' ]
					}
				],
				black: [
					{ piece: 'king', cells: [ 'D8' ] },
					{ piece: 'queen', cells: [ 'E8' ] },
					{ piece: 'bishop', cells: [ 'C8', 'F8' ] },
					{ piece: 'knight', cells: [ 'B8', 'G8' ]},
					{ piece: 'rook', cells: [ 'A8', 'H8' ]},
					{
						piece: 'pawn',
						cells: [ 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7' ]
					}
				]
			}
		}
	}
});
