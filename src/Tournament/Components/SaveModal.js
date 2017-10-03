import React from 'react'
import {ActivityIndicator, Image, Modal, StyleSheet, Text, TextInput, TouchableNativeFeedback, View} from 'react-native'

const background = TouchableNativeFeedback.SelectableBackgroundBorderless()
const useForeground = TouchableNativeFeedback.canUseNativeForeground()
const saveIcon = require('material-design-icons/content/drawable-hdpi/ic_archive_black_36dp.png')
const style = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonText: { fontSize: 20, marginLeft: 20, color: '#000' },
    input: { fontSize: 16, minWidth: '60%' }
})

export default function SaveModal(props) {
    let tournamentName = props.tournamentName
console.log(tournamentName)
    return (
        <Modal
            animationType="slide"
            visible={props.visible}
            onRequestClose={props.onBackPress}
        >
            <View style={style.view}>
                <TextInput
                    style={style.input}
                    autoFocus={true}
                    defaultValue={props.tournamentName}
                    maxLength={128}
                    onChangeText={(val) => tournamentName = val}
                    placeholder="Enter a name to save as"
                />
                {
                    props.loading ?
                        <ActivityIndicator animating={props.loading} size="small" /> :
                        <TouchableNativeFeedback
                            background={background}
                            useForeground={useForeground}
                            onPress={() => props.onSaveModalSubmit(tournamentName)}
                        >
                            <View style={style.button}>
                                <Image source={saveIcon}/>
                                <Text style={style.buttonText}>Save</Text>
                            </View>
                        </TouchableNativeFeedback>
                }
            </View>
        </Modal>
    )
}
