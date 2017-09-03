import React from 'react'
import { View, TextInput, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import EditPlayerHeader from './EditPlayerHeader'
import CreateNewPlayer from '../ActionsCreators/CreateNewPlayer'
import UpdateExistingPlayer from '../ActionsCreators/UpdateExistingPlayer'

class EditPlayerScreen extends React.Component {
    autofocusNickname() {
        return !this.props.navigation.state.params.id
    }

    render() {
        this.player = Object.assign({}, this.props.player)

        return (
            <View>
                <EditPlayerHeader
                    onBackClick={this.props.onBackClick}
                    onSaveClick={() => this.props.onSaveClick(this.player)}
                    title={this.props.navigation.state.params.title}
                />
                <TextInput
                    onChangeText={(value) => this.player.firstname = value}
                    placeholder="First name"
                    defaultValue={this.player.firstname}
                />
                <TextInput
                    autoFocus={this.autofocusNickname()}
                    onChangeText={(value) => this.player.nickname = value}
                    placeholder="Nickname"
                    defaultValue={this.player.nickname}
                />
                <TextInput
                    onChangeText={(value) => this.player.lastname = value}
                    placeholder="Last name"
                    defaultValue={this.player.lastname}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.navigation.state.params.id

    return {
        player: id ? state.players[id] : {}
    }
}

const mapDispatchToProps = (dispatch) => ({
    onBackClick: () => dispatch(NavigationActions.back()),
    onSaveClick: (player) => {
        if (!player.firstname && !player.nickname && !player.lastname) {
            return Alert.alert('Heresy!', 'At least one name field is required!')
        }
console.log(player)
        dispatch(player.id ? UpdateExistingPlayer(player) : CreateNewPlayer(player))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerScreen);
