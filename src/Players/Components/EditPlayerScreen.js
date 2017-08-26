import React from 'react'
import { View, TextInput, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import EditPlayerHeader from './EditPlayerHeader'
import CreateNewPlayer from '../ActionsCreators/CreateNewPlayer'
import UpdateExistingPlayer from '../ActionsCreators/UpdateExistingPlayer'

class EditPlayerScreen extends React.Component {
    autofocusNickname() {
        return !this.props.navigation.state.params.player
    }

    render() {
        const navParams = this.props.navigation.state.params

        this.player = {...navParams.player}

        return (
            <View>
                <EditPlayerHeader
                    onBackClick={this.props.onBackClick}
                    onSaveClick={() => this.props.onSaveClick(this.player)}
                    title={navParams.title}
                />
                <TextInput
                    onChangeText={(value) => this.player.firstname = value}
                    placeholder="First name"
                    value={this.player.firstname}
                />
                <TextInput
                    autoFocus={this.autofocusNickname()}
                    onChangeText={(value) => this.player.nickname = value}
                    placeholder="Nickname"
                    value={this.player.nickname}
                />
                <TextInput
                    onChangeText={(value) => this.player.lastname = value}
                    placeholder="Last name"
                    value={this.player.lastname}
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onBackClick: () => dispatch(NavigationActions.back()),
    onSaveClick: (player) => {
        if (!player.firstname && !player.nickname && !player.lastname) {
            return Alert.alert('Heresy!', 'At least one name field is required!')
        }

        dispatch(player.id ? UpdateExistingPlayer(player) : CreateNewPlayer(player))
    }
})

export default connect(null, mapDispatchToProps)(EditPlayerScreen);
