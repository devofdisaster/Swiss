import React from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import ScreenHeader from '../../Shared/Components/ScreenHeader'

class EditPlayerScreen extends React.Component {
    autofocusNickname() {
        return !this.props.firstname && !this.props.lastname && !this.props.nickname
    }

    render() {
        return (
            <View>
                <ScreenHeader
                    navIcon={{ image: require('material-design-icons/social/drawable-hdpi/ic_person_black_24dp.png') }}
                    title={this.props.navigation.state.params.title}
                />
                <TextInput
                    placeholder="First name"
                    value={this.props.firstname}
                />
                <TextInput
                    autoFocus={this.autofocusNickname()}
                    placeholder="Nickname"
                    value={this.props.nickname}
                />
                <TextInput
                    placeholder="Last name"
                    value={this.props.lastname}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    firstname: state.newPlayer.name,
    nickname: state.newPlayer.nickname,
    lastname: state.newPlayer.lastname
})
const mapDispatchToProps = (dispatch) => ({
    onSaveClicked: () => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerScreen);
