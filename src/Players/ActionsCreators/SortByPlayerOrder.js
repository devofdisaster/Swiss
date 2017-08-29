import { create, Types } from '../../Shared/Actions'

export default () => create(Types.PLAYERS_LIST_SORT_BY_COLUMN)({ column: 'order' })

