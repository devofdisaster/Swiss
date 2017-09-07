import { create, Types } from '../../Shared/Actions'

export default (player) => create(Types.PLAYERS_SAVE_NEW)({ player })
