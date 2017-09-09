import React from 'react'
import {ActivityIndicator, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const emptyImage = require('material-design-icons/social/drawable-hdpi/ic_sentiment_dissatisfied_black_36dp.png')
const style = StyleSheet.create({
    view: { justifyContent: 'center', alignItems: 'center' },
    list: { flex: -1 },
    header: { justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 },
    row: { flex: -1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
    title: { fontSize: 20, color: '#000' },
    subTitle: { fontSize: 16, marginBottom: 30 },
    text: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        textAlign: 'center'
    }
})

function renderItem(item, props) {
    return (
        <TouchableOpacity
            onPress={() => props.onLoadModalSubmit(item.title)}
            onLongPress={() => props.onItemLongPress(item.title)}
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
                {
                    props.loading ?
                        <ActivityIndicator animating={props.loading} size="small" /> :
                        <FlatList
                            ListHeaderComponent={
                                <View style={style.header}>
                                    <Text style={style.title}>Choose a saved tournament</Text>
                                    <Text style={style.subTitle}>(Press and hold to delete)</Text>
                                </View>
                            }
                            ListEmptyComponent={
                                <View style={style.header}>
                                    <Image style={{ alignSelf: 'center' }} source={emptyImage}/>
                                    <Text style={style.title}>No saved data found!</Text>
                                </View>
                            }
                            data={props.items}
                            renderItem={ ({ item }) => renderItem(item, props) }
                            initialNumToRender={8}
                            style={style.list}
                        />
                }
            </View>
        </Modal>
    )
}

