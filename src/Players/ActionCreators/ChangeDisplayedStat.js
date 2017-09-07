import { create, Types } from '../../Shared/Actions'

export default (stat) => create(Types.PLAYERS_LIST_CHANGE_STAT)({ stat })
