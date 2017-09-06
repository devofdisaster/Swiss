import React from 'react'
import { ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import ScreenHeader from '../../Shared/Components/ScreenHeader'
import OpenDrawer from '../../Shared/ActionCreators/OpenDrawer'
import GenerateNewRound from '../ActionCreators/GenerateNewRound'
import DeleteLastRound from '../ActionCreators/DeleteLastRound'
import AttemptDeleteLastRound from '../ActionCreators/AttemptDeleteLastRound'

const mapStateToProps = (state) => ({
    count: state.rounds.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNavIconPressed: () => dispatch(OpenDrawer()),
    menu: {
        items: [
            {
                name: 'GenerateNewRound',
                image: require('material-design-icons/content/drawable-hdpi/ic_add_circle_outline_black_36dp.png'),
                onPress: () => dispatch(GenerateNewRound()),
                onLongPress: () => ToastAndroid.show('Generate new round', ToastAndroid.SHORT)
            },
            {
                name: 'CustomizeNewRound',
                image: require('material-design-icons/editor/drawable-hdpi/ic_mode_edit_black_36dp.png'),
                onPress: () => {},
                onLongPress: () => ToastAndroid.show('Customize new round', ToastAndroid.SHORT)
            },
            {
                name: 'DeleteLastRound',
                image: require('material-design-icons/content/drawable-hdpi/ic_backspace_black_36dp.png'),
                onPress: () => dispatch(AttemptDeleteLastRound()),
                onLongPress: () => ToastAndroid.show('Delete last round', ToastAndroid.SHORT)
            }
        ]
    }
})

function RoundsHeader(props) {
    return (
        <ScreenHeader
            navIcon={{ onPress: props.onNavIconPressed }}
            title={props.count ? `Rounds: ${props.count}` : 'Rounds'}
            menu={props.menu}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundsHeader)

