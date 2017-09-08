import React from 'react'
import {FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const emptyImage = require('material-design-icons/social/drawable-hdpi/ic_sentiment_dissatisfied_black_36dp.png')
const style = StyleSheet.create({
    view: { justifyContent: 'center', alignItems: 'center' },
    list: { flex: -1 },
    row: { flex: -1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
    title: { fontSize: 20, color: '#000', marginBottom: 30 },
    text: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        textAlign: 'center'
    }
})

function renderItem(item, props) {
    return (
        <TouchableOpacity
            onPress={() => props.onLoadModalSubmit(item.title)}
        >
            <View>
                <Text style={style.text}>{ item.title }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function LoadModal(props) {
    return (
        <Modal
            animationType="slide"
            visible={props.visible}
            onRequestClose={props.onBackPress}
        >
            <View style={style.view}>
                <FlatList
                    ListHeaderComponent={<Text style={style.title}>Choose a saved tournament</Text>}
                    ListEmptyComponent={<Image style={{ alignSelf: 'center' }} source={emptyImage}/>}
                    data={props.items}
                    renderItem={ ({ item }) => renderItem(item, props) }
                    initialNumToRender={8}
                    refreshing={props.loading}
                    style={style.list}
                />
            </View>
        </Modal>
    )
}

