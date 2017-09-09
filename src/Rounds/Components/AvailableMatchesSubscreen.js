import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const style = StyleSheet.create({
    header: { justifyContent: 'flex-start', alignItems: 'center' },
    title: { fontSize: 20, color: '#000' },
    itemView: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderColor: 'grey',
        padding: 5
    },
    name: { fontSize: 16, width: '45%', textAlign: 'center' },
    vs: { textAlign: 'center', width: '10%' }
})

function renderItem(item, props) {
    return (
        <TouchableOpacity
            onPress={() => props.onAddMatchClick(item.id)}
        >
            <View style={style.itemView}>
                <Text style={style.name}>{item.player1name}</Text>
                <Text style={style.vs}>vs.</Text>
                <Text style={style.name}>{item.player2name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function AvailableMatchesSubscreen(props) {
    return (
        <FlatList
            ListHeaderComponent={
                <View style={style.header}>
                    <Text style={style.title}>Available matchups:</Text>
                </View>
            }
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={ ({ item }) => renderItem(item, props) }
            initialNumToRender={8}
        />
    )
}

