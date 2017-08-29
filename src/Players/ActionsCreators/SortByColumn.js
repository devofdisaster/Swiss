import { create, Types } from '../../Shared/Actions'

export default (column) => create(Types.PLAYERS_LIST_SORT_BY_COLUMN)({ column })
