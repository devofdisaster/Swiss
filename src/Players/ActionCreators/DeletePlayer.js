import { create, Types } from '../../Shared/Actions'

export default (id) => create(Types.PLAYERS_DELETE)({ id })

