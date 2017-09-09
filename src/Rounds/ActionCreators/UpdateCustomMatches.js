import {Types} from '../../Shared/Actions'

export default (available = [], selected = []) => ({ type: Types.ROUNDS_UPDATE_CUSTOM_MATCHES, available, selected })
