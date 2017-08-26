import MainScreen from '../Navigation/MainScreen'

export default initialState = {
    nav: MainScreen.router.getStateForAction(MainScreen.router.getActionForPathAndParams('players')),
    players: [],
    newPlayer: {
        firstname: null,
        nickname: null,
        lastname: null
    }
}
