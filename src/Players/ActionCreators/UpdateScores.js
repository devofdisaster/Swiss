import {Types} from '../../Shared/Actions'

export default (playerScores) => ({ type: Types.PLAYERS_UPDATE_SCORES, scores: playerScores })
