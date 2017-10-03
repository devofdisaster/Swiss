import { create, Types } from '../../Shared/Actions'

export default (stat) => create(Types.STANDINGS_CHANGE_STAT)({ stat })

