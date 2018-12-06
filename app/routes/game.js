import Route from '@ember/routing/route';
import MovementProcessor from '../utils/movement-processor'

let ranks = []
for(let rank of MovementProcessor.Ranks)
{
	ranks.unshift(rank)
}

export default Route.extend({
	model() {
		return {
			ranks: ranks,
			files: MovementProcessor.Files,
			pieces: {
				A1: { piece: MovementProcessor.Pieces.Rook, color: 'white' },
				A2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				A7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				A8: { piece: MovementProcessor.Pieces.Rook, color: 'black' },
				
				B1: { piece: MovementProcessor.Pieces.Knight, color: 'white' },
				B2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				B7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				B8: { piece: MovementProcessor.Pieces.Knight, color: 'black' },
				
				C1: { piece: MovementProcessor.Pieces.Bishop, color: 'white' },
				C2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				C7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				C8: { piece: MovementProcessor.Pieces.Bishop, color: 'black' },
				
				D1: { piece: MovementProcessor.Pieces.King, color: 'white' },
				D2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				D7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				D8: { piece: MovementProcessor.Pieces.King, color: 'black' },
				
				E1: { piece: MovementProcessor.Pieces.Queen, color: 'white' },
				E2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				E7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				E8: { piece: MovementProcessor.Pieces.Queen, color: 'black' },
				
				F1: { piece: MovementProcessor.Pieces.Bishop, color: 'white' },
				F2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				F7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				F8: { piece: MovementProcessor.Pieces.Bishop, color: 'black' },
				
				G1: { piece: MovementProcessor.Pieces.Knight, color: 'white' },
				G2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				G7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				G8: { piece: MovementProcessor.Pieces.Knight, color: 'black' },
				
				H1: { piece: MovementProcessor.Pieces.Rook, color: 'white' },
				H2: { piece: MovementProcessor.Pieces.Pawn, color: 'white' },
				H7: { piece: MovementProcessor.Pieces.Pawn, color: 'black' },
				H8: { piece: MovementProcessor.Pieces.Rook, color: 'black' }
			}
		}
	}
});
