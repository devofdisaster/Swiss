import initialState from '../../Shared/InitialState'

export default function (state = initialState.newPlayer, action) {
    if (action.routeName === 'NewPlayer') {
        return initialState
    }

    return state
}
